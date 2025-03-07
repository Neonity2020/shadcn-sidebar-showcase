import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

/**
 * 导出数据库数据为JSON文件
 */
export async function exportData(outputPath = './data/export') {
  try {
    // 确保输出目录存在
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true })
    }

    // 导出用户数据
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
        // 不导出密码
      }
    })

    // 写入JSON文件
    fs.writeFileSync(
      path.join(outputPath, 'users.json'),
      JSON.stringify(users, null, 2)
    )

    console.log(`数据已导出到 ${outputPath}`)
    return { success: true, path: outputPath }
  } catch (error) {
    console.error('导出数据失败:', error)
    return { success: false, error }
  } finally {
    await prisma.$disconnect()
  }
}

/**
 * 检查数据库健康状态
 */
export async function checkDbHealth() {
  try {
    // 尝试连接数据库
    await prisma.$connect()
    
    // 获取用户数量作为简单检查
    const userCount = await prisma.user.count()
    
    return {
      status: 'healthy',
      connection: true,
      userCount,
      timestamp: new Date().toISOString()
    }
  } catch (error: any) {
    return {
      status: 'unhealthy',
      connection: false,
      error: error.message,
      timestamp: new Date().toISOString()
    }
  } finally {
    await prisma.$disconnect()
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  const args = process.argv.slice(2)
  const command = args[0]

  switch (command) {
    case 'export':
      exportData(args[1])
      break
    case 'health':
      checkDbHealth().then(console.log)
      break
    default:
      console.log('未知命令。可用命令: export, health')
  }
} 