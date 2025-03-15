'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, XCircle } from "lucide-react";
import { mriQuiz } from "@/data/quizzes";

export default function MRIQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerClick = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === mriQuiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowFeedback(true);
  };

  const handleContinue = () => {
    if (currentQuestion + 1 < mriQuiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setShowScore(true);
    }
  };

  const progress = ((currentQuestion + 1) / mriQuiz.questions.length) * 100;

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-2">{mriQuiz.title}</h1>
      <p className="text-center text-gray-600 mb-8">{mriQuiz.description}</p>
      
      <Progress value={progress} className="mb-8" />
      
      {!showScore ? (
        <Card>
          <CardHeader>
            <CardTitle>问题 {currentQuestion + 1}/{mriQuiz.questions.length}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl mb-6">{mriQuiz.questions[currentQuestion].question}</p>
            <div className="space-y-4">
              {mriQuiz.questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    showFeedback
                      ? index === mriQuiz.questions[currentQuestion].correctAnswer
                        ? "default"
                        : selectedAnswer === index
                        ? "destructive"
                        : "outline"
                      : selectedAnswer === index
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
              <Alert className={`mt-4 ${selectedAnswer === mriQuiz.questions[currentQuestion].correctAnswer ? 'bg-green-50' : 'bg-red-50'}`}>
                {selectedAnswer === mriQuiz.questions[currentQuestion].correctAnswer ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-500" />
                )}
                <AlertDescription className="mt-2">
                  {mriQuiz.questions[currentQuestion].explanation}
                </AlertDescription>
              </Alert>
            )}

            <Button
              className="mt-6 w-full"
              onClick={showFeedback ? handleContinue : handleNext}
              disabled={selectedAnswer === null}
            >
              {showFeedback 
                ? (currentQuestion === mriQuiz.questions.length - 1 ? "完成" : "继续")
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
              你的得分：{score} / {mriQuiz.questions.length}
            </p>
            <p className="text-lg">
              正确率：{((score / mriQuiz.questions.length) * 100).toFixed(1)}%
            </p>
            <Button
              className="mt-6 w-full"
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setShowScore(false);
                setSelectedAnswer(null);
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
