import { projects } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">项目管理</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="mb-4">
              {project.progress === 0 ? (
                <span className="inline-block px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
                  规划中
                </span>
              ) : (
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                  project.status === 'completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'building' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status === 'completed' ? '已完成' :
                   project.status === 'building' ? '建设中' : '已暂停'}
                </span>
              )}
            </div>

            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div className="text-sm text-gray-600">
                  进度: {project.progress}%
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div 
                  style={{ width: `${project.progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                />
              </div>
            </div>

            <a 
              href={project.projectUrl}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              查看详情 →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
