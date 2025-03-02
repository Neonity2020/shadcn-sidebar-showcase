import React from 'react';
import Image from 'next/image';

export default function FSBBPage() {
  return (
    <div className="container mx-auto px-2 md:px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">FSBB：血流敏感黑血成像技术</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">什么是FSBB？</h2>
        <p className="mb-4">Flow Sensitive Black Blood imaging（血流敏感黑血成像）是一种用于血管成像的MRI技术。</p>
        <p className="mb-4">东芝的流动敏感黑血（Flow-Sensitive Black Blood，FSBB）序列通过在T2*加权序列中施加运动探测梯度（Motion Probing Gradients，MPGs），能够显著提升血管对比度，同时避免了明显的T2*衰减。</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">技术原理</h2>
        <p className="mb-4">FSBB技术结合了T2*磁敏感效应和体素内不相干运动（IVIM）失相位效应生成图像对比。当不施加MPGs时，该序列被称为血流不敏感黑血成像技术（FIBB），此时系统在三个方向均实现完全流动补偿，图像对比仅来源于T2*效应。</p>
        <p className="mb-4">与传统的飞行时间法（Time of Flight, TOF）不同，FSBB能够显示流速缓慢的血管结构，如静脉系统，这在TOF技术中往往难以成像。</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">临床应用</h2>
        <p className="mb-4">由于FSBB技术对磁敏感效应和慢血流血管具有高度敏感性，该技术适用于多种疾病的研究：</p>
        <ul className="list-disc pl-6 mb-4">
          <li>创伤性脑损伤</li>
          <li>中风</li>
          <li>脑出血</li>
          <li>神经退行性疾病</li>
          <li>多发性硬化症</li>
          <li>血管畸形</li>
          <li>静脉疾病</li>
          <li>神经囊尾蚴病</li>
          <li>脑肿瘤评估</li>
        </ul>
        <p className="mb-4">FSBB序列在显示豆纹动脉（lenticulostriate arteries, LSAs）方面具有重要价值。虽然在7T场强下可通过时间飞跃法（TOF）技术显示这些血管（<a href="/showcases/7t-cases" className="text-blue-600 hover:underline">查看7T豆纹动脉案例</a>），但FSBB序列的优势在于能够在临床常用的1.5T和3T场强下实现豆纹动脉的可视化。</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">FSBB与FIBB对比</h2>
        <p className="mb-4">FIBB（血流不敏感黑血成像）与FSBB的主要区别在于是否施加运动探测梯度（MPGs）：</p>
        <ul className="list-disc pl-6 mb-4">
          <li>FIBB：不施加MPGs，采用流动补偿技术，图像显示标准T2*加权对比</li>
          <li>FSBB：施加MPGs（对应b值通常为1秒/平方毫米），在保持相同T2*加权对比的同时，显著提升低速血流血管显示效果</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">FSBB的优势</h2>
        <p className="mb-4">相比其他厂商提供的后处理技术（通常采用磁敏感加权相位蒙版增强T2*图像的血管对比度），FSBB具有以下优势：</p>
        <ul className="list-disc pl-6 mb-4">
          <li>能够在较短TE条件下实现低速血管的对比度增强，同时保持成像质量</li>
          <li>血管对比信息可直接在未经处理的幅值图像中显现，图像处理流程更为简洁</li>
          <li>避免了长TE带来的图像质量下降问题</li>
          <li>无需通过滤波补偿背景磁场不均匀性</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">参考文献</h2>
        <ol className="list-decimal pl-6">
          <li className="mb-2">T. Kimura, M. Ikedo, N. Furudate, and S. Takemoto, "Flow-Sensitive Susceptibility Weighted Imaging presented at the International Society for Magnetic Resonance in Medicine, 2007, p.3015.</li>
          <li className="mb-2">K. Tsuchiya, H. Tateishi, M. Yoshida, et al., "Flow-sensitive Susceptibility-weighted Imaging of the Brain: Initial Experience in Ischemic Lesions," presented at the International Society for Magnetic Resonance in Medicine, 2007, p.3016.</li>
          <li className="mb-2">D. Le Bihan and E. Breton, "Imagerie de diffusion in-vivo par resonance magnetique nucleaire," Comptes-Rendus Academie Sci., vol.93, pp.27-34, 1985.</li>
          <li className="mb-2">S. Mittal, Z. Wu, J. Neelavali, and E. Haacke, "Susceptibility Weighted Imaging: Technical Aspects and Clinical Applications," Am. J. Neuroradiol., vol. 30, pp.332-352, 2009.</li>
          <li className="mb-2">K. Gotoh, T. Okada, Y. Miki, et al., "Visualization of the Lenticulostriate Artery With Flow-Sensitive Black Blood Acquisition in Comparison with Time-of-Flight MR Angiography," J. Magn. Reson. Imaging, vol.29, pp.65-69, 2009.</li>
        </ol>
      </div>
    </div>
  );
}
