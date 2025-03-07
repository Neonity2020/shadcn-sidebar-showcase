import React from 'react';
import Image from 'next/image';

export default function FSBBPage() {
  return (
    <div className="container mx-auto px-2 md:px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">SWI：磁敏感加权成像技术</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">什么是SWI？</h2>
        <p className="mb-4">磁敏感加权成像（Susceptibility Weighted Imaging，SWI）是一种利用组织磁敏感性差异的先进MRI技术，能够提供高分辨率的静脉血管和含铁组织成像。</p>
        <p className="mb-4">SWI技术结合了高分辨率的三维梯度回波T2*加权图像的幅度信息和相位信息，通过特殊的后处理算法增强组织间的对比度，特别是对含铁血红素和钙化等具有顺磁性或抗磁性物质高度敏感。</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">技术原理</h2>
        <p className="mb-4">SWI的基本原理是利用不同组织对磁场的敏感性差异。当组织处于外部磁场中时，其内部磁场会发生微小变化，这种变化会导致局部相位偏移。SWI通过以下步骤生成最终图像：</p>
        <ol className="list-decimal pl-6 mb-4">
          <li>采集高分辨率三维梯度回波序列的幅度和相位数据</li>
          <li>对相位图像进行处理，去除大尺度背景场效应</li>
          <li>创建相位掩模（phase mask）</li>
          <li>将相位掩模与原始幅度图像相乘多次，增强对比度</li>
          <li>进行最小强度投影（mIP）处理，增强静脉显示</li>
        </ol>
        <p className="mb-4">与传统的T2*加权成像相比，SWI能够提供更高的对比度和更详细的微小结构信息，特别是对静脉血管系统的显示更为清晰。</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">临床应用</h2>
        <p className="mb-4">SWI技术在神经影像学中具有广泛的应用价值，主要包括：</p>
        <ul className="list-disc pl-6 mb-4">
          <li>脑出血检测（微出血、弥散性轴索损伤）</li>
          <li>脑血管畸形（海绵状血管瘤、毛细血管扩张症）</li>
          <li>静脉血栓形成</li>
          <li>多发性硬化症（MS）病灶中铁沉积的评估</li>
          <li>神经退行性疾病（帕金森病、阿尔茨海默病）中铁沉积的检测</li>
          <li>脑肿瘤内出血和钙化的鉴别</li>
          <li>脑深部静脉系统的评估</li>
          <li>创伤性脑损伤的评估</li>
          <li>中风患者的血管成像和血氧代谢评估</li>
        </ul>
        <p className="mb-4">SWI在儿科神经影像学中也具有重要价值，特别是在新生儿缺氧缺血性脑病、儿童脑外伤和发育性静脉异常的评估方面。</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">SWI的优势</h2>
        <p className="mb-4">与其他MRI序列相比，SWI具有以下优势：</p>
        <ul className="list-disc pl-6 mb-4">
          <li>对微小出血灶的检出率显著高于常规T2*GRE序列</li>
          <li>能够区分钙化（抗磁性）和含铁血红素（顺磁性）</li>
          <li>提供高分辨率的静脉血管成像，无需使用对比剂</li>
          <li>可以评估脑组织氧合状态的变化</li>
          <li>在3T及以上高场强MRI系统中效果更佳</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">SWI的局限性</h2>
        <p className="mb-4">尽管SWI具有诸多优势，但也存在一些局限性：</p>
        <ul className="list-disc pl-6 mb-4">
          <li>对运动伪影敏感，需要患者保持静止</li>
          <li>在空气-组织界面（如鼻窦附近）容易产生伪影</li>
          <li>扫描时间相对较长</li>
          <li>对金属植入物产生的伪影更为明显</li>
          <li>图像解释需要专业经验，以区分真实病变和伪影</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">SWI的技术发展</h2>
        <p className="mb-4">SWI技术自1997年由Haacke等人首次提出以来，经历了多次改进：</p>
        <ul className="list-disc pl-6 mb-4">
          <li>SWAN（GE）：T2星加权血管成像，采用多回波采集提高信噪比</li>
          <li>VenoBOLD（Philips）：结合静脉血氧水平依赖（BOLD）效应的SWI变体</li>
          <li>SWIp（Siemens）：改进的SWI处理算法，减少伪影并提高图像质量</li>
          <li>QSM（定量磁敏感成像）：从SWI相位数据中定量计算组织磁敏感性</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">参考文献</h2>
        <ol className="list-decimal pl-6">
          <li className="mb-2">Haacke EM, Xu Y, Cheng YC, Reichenbach JR. Susceptibility weighted imaging (SWI). Magn Reson Med. 2004;52(3):612-618.</li>
          <li className="mb-2">Mittal S, Wu Z, Neelavalli J, Haacke EM. Susceptibility-weighted imaging: technical aspects and clinical applications, part 2. AJNR Am J Neuroradiol. 2009;30(2):232-252.</li>
          <li className="mb-2">Tong KA, Ashwal S, Obenaus A, et al. Susceptibility-weighted MR imaging: a review of clinical applications in children. AJNR Am J Neuroradiol. 2008;29(1):9-17.</li>
          <li className="mb-2">Liu S, Buch S, Chen Y, et al. Susceptibility-weighted imaging: current status and future directions. NMR Biomed. 2017;30(4).</li>
          <li className="mb-2">Wang Y, Liu T. Quantitative susceptibility mapping (QSM): Decoding MRI data for a tissue magnetic biomarker. Magn Reson Med. 2015;73(1):82-101.</li>
        </ol>
      </div>
    </div>
  );
}
