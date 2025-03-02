import React from 'react';

export default function PXAPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">多形性黄色星形细胞瘤(PXA)的MRI诊断要点</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">概述</h2>
        <p className="mb-4">多形性黄色星形细胞瘤(Pleomorphic Xanthoastrocytoma, PXA)是一种罕见的星形细胞肿瘤，WHO II-III级，多见于儿童和年轻成人，好发于颞叶皮质和皮质下区域。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">MRI表现特点</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>位置：多位于大脑表浅部位，常累及皮质和软脑膜</li>
          <li>形态：多为囊实性肿块，实性部分常位于囊性部分的一侧或壁内</li>
          <li>T1WI：实性部分呈等或低信号</li>
          <li>T2WI：实性部分呈等或高信号，囊性部分呈高信号</li>
          <li>增强扫描：实性部分明显强化，可见"硬脑膜尾征"</li>
          <li>DWI：实性部分可表现为弥散受限</li>
          <li>MRS：可见Cho峰升高，NAA峰降低，但不如高级别胶质瘤明显</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">鉴别诊断</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>节细胞胶质瘤：多位于颞叶，囊实性，但更常见于儿童</li>
          <li>胶质母细胞瘤：更具侵袭性，水肿和坏死更明显</li>
          <li>脑膜瘤：多为实性，与硬脑膜广泛接触，钙化更常见</li>
          <li>转移瘤：多发，周围水肿明显，有原发肿瘤病史</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">预后因素</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>肿瘤分级：间变性PXA (WHO III级)预后较差</li>
          <li>肿瘤切除程度：全切除预后较好</li>
          <li>有无坏死：存在坏死区预示预后较差</li>
          <li>增殖指数：Ki-67指数高提示复发风险增加</li>
          <li>BRAF V600E突变：可能与预后相关，也为靶向治疗提供可能</li>
        </ul>
      </section>

      <div className="mt-8 text-sm text-gray-600">
        <p>参考资料：<a href="https://www.mriwiki.cn/#%E5%A4%9A%E5%BD%A2%E6%80%A7%E9%BB%84%E8%89%B2%E6%98%9F%E5%BD%A2%E7%BB%86%E8%83%9E%E7%98%A4" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">MRI Wiki - 多形性黄色星形细胞瘤</a></p>
        <p>参考资料：<a href="https://radiopaedia.org/articles/pleomorphic-xanthoastrocytoma" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Radiopaedia - Pleomorphic Xanthoastrocytoma</a></p>
      </div>
    </div>
  );
}
