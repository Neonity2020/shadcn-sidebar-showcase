'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, XCircle, SkipForward } from "lucide-react";
import { mriQuiz } from "@/data/quizzes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MRIQuiz() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showSkipDialog, setShowSkipDialog] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("0");
  const [selectedQuestion, setSelectedQuestion] = useState("0");

  const currentGroupData = mriQuiz.groups[currentGroup];
  const currentQuestionData = currentGroupData.questions[currentQuestion];

  const handleAnswerClick = (answerIndex: number) => {
    setSelectedAnswers(prev => {
      if (currentQuestionData.type === 'single') {
        return [answerIndex];
      } else {
        if (prev.includes(answerIndex)) {
          return prev.filter(index => index !== answerIndex);
        } else {
          return [...prev, answerIndex];
        }
      }
    });
  };

  const handleNext = () => {
    const correctAnswer = currentQuestionData.correctAnswer;
    
    // 检查答案是否正确
    const isCorrect = Array.isArray(correctAnswer)
      ? selectedAnswers.length === correctAnswer.length &&
        correctAnswer.every(answer => selectedAnswers.includes(answer))
      : selectedAnswers.length === 1 && selectedAnswers[0] === correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
    }
    setShowFeedback(true);
  };

  const handleContinue = () => {
    if (currentQuestion + 1 < currentGroupData.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswers([]);
      setShowFeedback(false);
    } else if (currentGroup + 1 < mriQuiz.groups.length) {
      setCurrentGroup(currentGroup + 1);
      setCurrentQuestion(0);
      setSelectedAnswers([]);
      setShowFeedback(false);
    } else {
      setShowScore(true);
    }
  };

  const handleSkip = () => {
    const newGroup = parseInt(selectedGroup);
    const newQuestion = parseInt(selectedQuestion);
    setCurrentGroup(newGroup);
    setCurrentQuestion(newQuestion);
    setSelectedAnswers([]);
    setShowFeedback(false);
    setShowSkipDialog(false);
  };

  const progress = ((currentGroup * currentGroupData.questions.length + currentQuestion + 1) / 
    (mriQuiz.groups.length * currentGroupData.questions.length)) * 100;

  const isAnswerSelected = (index: number) => {
    return selectedAnswers.includes(index);
  };

  const isCorrectAnswer = (index: number) => {
    const correctAnswer = currentQuestionData.correctAnswer;
    return Array.isArray(correctAnswer)
      ? correctAnswer.includes(index)
      : correctAnswer === index;
  };

  const totalQuestions = mriQuiz.groups.reduce((acc, group) => acc + group.questions.length, 0);

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-2">{mriQuiz.title}</h1>
      <p className="text-center text-gray-600 mb-8">{mriQuiz.description}</p>
      
      <Progress value={progress} className="mb-8" />
      
      {!showScore ? (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>
                {currentGroupData.title} - 问题 {currentQuestion + 1}/{currentGroupData.questions.length}
              </CardTitle>
              <Dialog open={showSkipDialog} onOpenChange={setShowSkipDialog}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <SkipForward className="h-4 w-4 mr-2" />
                    跳题
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>跳转到指定题目</DialogTitle>
                    <DialogDescription>
                      请选择要跳转到的题目组和具体题目
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">题目组</label>
                      <Select value={selectedGroup} onValueChange={setSelectedGroup}>
                        <SelectTrigger>
                          <SelectValue placeholder="选择题目组" />
                        </SelectTrigger>
                        <SelectContent>
                          {mriQuiz.groups.map((group, index) => (
                            <SelectItem key={group.id} value={index.toString()}>
                              {group.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">具体题目</label>
                      <Select value={selectedQuestion} onValueChange={setSelectedQuestion}>
                        <SelectTrigger>
                          <SelectValue placeholder="选择题目" />
                        </SelectTrigger>
                        <SelectContent>
                          {mriQuiz.groups[parseInt(selectedGroup)].questions.map((_, index) => (
                            <SelectItem key={index} value={index.toString()}>
                              问题 {index + 1}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full" onClick={handleSkip}>
                      跳转
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <p className="text-xl">{currentQuestionData.question}</p>
              <span className="text-sm text-gray-500">
                {currentQuestionData.type === 'single' ? '单选题' : '多选题'}
              </span>
            </div>
            <div className="space-y-4">
              {currentQuestionData.options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    showFeedback
                      ? isCorrectAnswer(index)
                        ? "default"
                        : isAnswerSelected(index)
                        ? "destructive"
                        : "outline"
                      : isAnswerSelected(index)
                      ? "default"
                      : "outline"
                  }
                  className="w-full text-left"
                  onClick={() => !showFeedback && handleAnswerClick(index)}
                  disabled={showFeedback}
                >
                  {option}
                </Button>
              ))}
            </div>
            
            {showFeedback && (
              <Alert className={`mt-4 ${selectedAnswers.length > 0 && isCorrectAnswer(selectedAnswers[0]) ? 'bg-green-50' : 'bg-red-50'}`}>
                {selectedAnswers.length > 0 && isCorrectAnswer(selectedAnswers[0]) ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-500" />
                )}
                <AlertDescription className="mt-2">
                  {currentQuestionData.explanation}
                </AlertDescription>
              </Alert>
            )}

            <Button
              className="mt-6 w-full"
              onClick={showFeedback ? handleContinue : handleNext}
              disabled={selectedAnswers.length === 0}
            >
              {showFeedback 
                ? (currentGroup === mriQuiz.groups.length - 1 && currentQuestion === currentGroupData.questions.length - 1 ? "完成" : "继续")
                : "检查答案"}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>测验完成！</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-4">
              你的得分：{score} / {totalQuestions}
            </p>
            <p className="text-lg">
              正确率：{((score / totalQuestions) * 100).toFixed(1)}%
            </p>
            <Button
              className="mt-6 w-full"
              onClick={() => {
                setCurrentGroup(0);
                setCurrentQuestion(0);
                setScore(0);
                setShowScore(false);
                setSelectedAnswers([]);
                setShowFeedback(false);
              }}
            >
              重新开始
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
