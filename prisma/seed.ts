import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // 清除现有数据
  await prisma.user.deleteMany()

  // 创建管理员用户
  const adminPassword = await hash('admin123', 10)
  const admin = await prisma.user.create({
    data: {
      name: '管理员',
      email: 'admin@example.com',
      password: adminPassword,
    },
  })
  console.log('创建管理员用户:', admin)

  // 创建测试用户
  const userPassword = await hash('user123', 10)
  const user = await prisma.user.create({
    data: {
      name: '测试用户',
      email: 'user@example.com',
      password: userPassword,
    },
  })
  console.log('创建测试用户:', user)
}

main()
  .catch((e) => {
    console.error('种子脚本错误:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 