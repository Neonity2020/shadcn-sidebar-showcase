import React from 'react';
import Image from 'next/image';

export default function DWIPage() {
  return (
    <div className="container mx-auto px-2 md:px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">DWI：扩散加权成像技术</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">什么是DWI？</h2>
        <p className="mb-4">扩散加权成像（Diffusion Weighted Imaging，DWI）是一种能够检测水分子随机热运动（布朗运动）的先进MRI技术。DWI通过测量组织中水分子扩散的受限程度，提供了与传统解剖成像不同的功能性信息。</p>
        <p className="mb-4">DWI技术对早期缺血性脑卒中特别敏感，能够在常规MRI序列显示异常之前检测到病变，已成为急性卒中诊断的重要工具。</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">扩散（Diffusion）原理</h2>
        <p className="mb-4">扩散（Diffusion，美/dɪˈfjuːʒn/）是指分子从高浓度区域向低浓度区域移动的自然过程。在生物组织中，水分子不断进行随机热运动，这种运动在不同组织中受到不同程度的限制：</p>
        <ul className="list-disc pl-6 mb-4">
          <li>在脑脊液等自由液体中，水分子运动几乎不受限制（自由扩散）</li>
          <li>在正常脑组织中，水分子运动受到一定程度的限制（受限扩散）</li>
          <li>在缺血性病变中，由于细胞肿胀和细胞毒性水肿，水分子运动受到严重限制（高度受限扩散）</li>
        </ul>
        <p className="mb-4">DWI通过添加特殊的扩散敏感梯度场，使MRI信号对水分子运动敏感。在扩散受限区域（如急性脑梗死），信号呈现高强度（高信号）；而在扩散不受限的区域（如脑脊液），信号呈现低强度（低信号）。</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">技术原理</h2>
        <p className="mb-4">DWI基于Stejskal-Tanner序列，通过在常规自旋回波序列中添加一对扩散敏感梯度脉冲来实现：</p>
        <ol className="list-decimal pl-6 mb-4">
          <li>第一个梯度脉冲使处于不同位置的质子产生相位差</li>
          <li>在一定时间间隔后（扩散时间），施加第二个相反的梯度脉冲</li>
          <li>对于静止的质子，两个梯度脉冲的效果相互抵消</li>
          <li>对于发生扩散运动的质子，由于位置改变，无法完全重新聚相，导致信号衰减</li>
        </ol>
        <p className="mb-4">扩散加权程度由b值决定，b值越高，对扩散运动越敏感。临床上常用b值为0和1000 s/mm²，通过比较不同b值图像可评估组织扩散特性。</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">扩散系数与ADC图</h2>
        <p className="mb-4">表观扩散系数（Apparent Diffusion Coefficient，ADC）是定量评估组织中水分子扩散程度的参数。ADC图通过计算不同b值DWI图像之间的信号衰减来生成：</p>
        <ul className="list-disc pl-6 mb-4">
          <li>高ADC值（亮区）表示扩散不受限（如脑脊液、血管性水肿）</li>
          <li>低ADC值（暗区）表示扩散受限（如急性脑梗死、高细胞密度肿瘤）</li>
        </ul>
        <p className="mb-4">ADC图与DWI图像呈"反相"关系，两者结合分析可避免T2透射效应（T2 shine-through）的干扰，提高诊断准确性。</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">临床应用</h2>
        <p className="mb-4">DWI在临床实践中有广泛的应用：</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>神经系统疾病</strong>：
            <ul className="list-disc pl-6 mt-2">
              <li>急性缺血性脑卒中的早期诊断（发病后数分钟内可显示异常）</li>
              <li>脑脓肿与囊性肿瘤的鉴别</li>
              <li>脑炎的检测与评估</li>
              <li>脱髓鞘疾病的活动性评估</li>
            </ul>
          </li>
          <li className="mt-2"><strong>肿瘤学</strong>：
            <ul className="list-disc pl-6 mt-2">
              <li>肿瘤细胞密度评估</li>
              <li>肿瘤分级（高级别肿瘤通常扩散受限）</li>
              <li>治疗反应监测</li>
              <li>肿瘤与水肿、坏死的鉴别</li>
            </ul>
          </li>
          <li className="mt-2"><strong>体部成像</strong>：
            <ul className="list-disc pl-6 mt-2">
              <li>肝脏、胰腺、肾脏和前列腺等器官的病变检测</li>
              <li>淋巴结转移评估</li>
              <li>骨髓病变检测</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">DWI的进阶技术</h2>
        <p className="mb-4">基于DWI的进阶技术包括：</p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>扩散张量成像（DTI）</strong>：测量水分子扩散的方向性，用于评估白质纤维束的完整性和方向</li>
          <li><strong>扩散峰度成像（DKI）</strong>：评估组织中水分子扩散的非高斯特性，提供更详细的微观结构信息</li>
          <li><strong>IVIM（Intravoxel Incoherent Motion）</strong>：区分组织中的扩散和灌注成分</li>
          <li><strong>扩散谱成像（DSI）</strong>：高级扩散成像技术，可解析复杂的纤维交叉结构</li>
          <li><strong>扩散功能MRI</strong>：结合扩散成像与功能MRI，评估神经活动相关的水分子扩散变化</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">DWI的局限性</h2>
        <p className="mb-4">尽管DWI技术强大，但也存在一些局限性：</p>
        <ul className="list-disc pl-6 mb-4">
          <li>对运动伪影极为敏感，需要患者保持静止</li>
          <li>在某些解剖区域（如脑干、颅底）容易出现磁敏感伪影</li>
          <li>空间分辨率相对较低</li>
          <li>T2透射效应可能导致误诊</li>
          <li>不同设备和参数获得的ADC值可能存在差异，缺乏标准化</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">参考文献</h2>
        <ol className="list-decimal pl-6">
          <li className="mb-2">Stejskal EO, Tanner JE. Spin diffusion measurements: spin echoes in the presence of a time-dependent field gradient. J Chem Phys. 1965;42(1):288-292.</li>
          <li className="mb-2">Schaefer PW, Grant PE, Gonzalez RG. Diffusion-weighted MR imaging of the brain. Radiology. 2000;217(2):331-345.</li>
          <li className="mb-2">Le Bihan D, Johansen-Berg H. Diffusion MRI at 25: exploring brain tissue structure and function. Neuroimage. 2012;61(2):324-341.</li>
          <li className="mb-2">Hagmann P, Jonasson L, Maeder P, et al. Understanding diffusion MR imaging techniques: from scalar diffusion-weighted imaging to diffusion tensor imaging and beyond. Radiographics. 2006;26 Suppl 1:S205-S223.</li>
          <li className="mb-2">Koh DM, Collins DJ. Diffusion-weighted MRI in the body: applications and challenges in oncology. AJR Am J Roentgenol. 2007;188(6):1622-1635.</li>
        </ol>
      </div>
    </div>
  );
}
