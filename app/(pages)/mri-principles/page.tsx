import React from 'react';

export default function MRIPrinciplesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">磁共振成像(MRI)原理简介</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">基本原理</h2>
        <p className="text-gray-700 mb-4">
          磁共振成像（MRI）是一种先进的医学影像技术，它利用强磁场和射频脉冲来产生人体内部的详细图像。
          这项技术主要基于氢原子核（质子）在磁场中的行为特性。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">主要组成部分</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>主磁体：产生强大且均匀的静态磁场</li>
          <li>梯度线圈：用于空间编码</li>
          <li>射频（RF）系统：发射和接收射频信号</li>
          <li>计算机系统：图像重建和处理</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">成像过程</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>将患者置于强磁场中，体内氢原子核的自旋轴向会与磁场方向一致</li>
            <li>发射特定频率的射频脉冲，使氢原子核产生共振</li>
            <li>关闭射频脉冲后，氢原子核返回平衡状态时释放能量</li>
            <li>接收线圈检测释放的信号</li>
            <li>通过复杂的数学运算重建成图像</li>
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">临床应用</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">优势</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>无电离辐射</li>
              <li>软组织对比度高</li>
              <li>多平面成像能力</li>
              <li>功能成像可能</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">常见应用</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>神经系统检查</li>
              <li>肌肉骨骼系统</li>
              <li>心血管检查</li>
              <li>肿瘤诊断</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
