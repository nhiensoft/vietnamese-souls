export type ContentSection = {
  id: string
  title: string
  subtitle?: string
  description: string
  image: string
  reverse?: boolean
}

export const contentSections: ContentSection[] = [
  {
    id: 'xua-va-nay',
    title: 'VIỆT NAM',
    subtitle: 'XƯA VÀ NAY',
    description:
      'Tàn tích cũ, ký ức sống – mỗi câu chuyện là một thước phim khiến bạn nghẹt thở.',
    image: '/images/sections/section-1.jpg',
  },
  {
    id: 'nhan-dao',
    title: 'NHỮNG GIÁ TRỊ NHÂN ĐẠO',
    description:
      'Sống — thực chất là biết ơn những gì mình đang có. Dẫu bầu trời thay đổi, anh em nước Nam vẫn chung một nhà.',
    image: '/images/sections/section-2.jpg',
    reverse: true,
  },
  {
    id: 'su-that',
    title: '100% SỰ THẬT',
    subtitle: 'VIETNAMESE SOULS.',
    description:
      'Không phải mọi vinh quang đều được viết bằng ánh sáng. Có những câu chuyện khắc bằng máu, tưới bằng mồ hôi, và trôi đi trong nước mắt.',
    image: '/images/sections/section-3.jpg',
  },
  {
    id: 'mo-hoi',
    title: 'MỒ HÔI',
    description:
      'Hành trình ấy — giờ mới bắt đầu được kể. SẴN SÀNG CHƯA?',
    image: '/images/sections/section-4.jpg',
    reverse: true,
  },
]

export type HouInfo = {
  title: string
  description: string
  image: string
}

export const houSections: HouInfo[] = [
  {
    title: 'Kinh tế trẻ — Trái tim Việt',
    description:
      'Thầy cô Khoa Kinh tế không chỉ dạy kiến thức, mà truyền lửa yêu nước qua từng bài giảng, từng hành động.',
    image: '/images/sections/hou-1.jpg',
  },
  {
    title: 'Từ giảng đường đến Tổ quốc',
    description:
      'Sinh viên học để hiểu đất nước, để cống hiến — bằng trí tuệ, trách nhiệm và khát vọng đổi thay.',
    image: '/images/sections/hou-2.jpg',
  },
  {
    title: 'Yêu nước — không lời, nhưng hành động',
    description:
      'Một mái trường, một tinh thần: thầy trò HOU mang tri thức để phụng sự đất nước.',
    image: '/images/sections/hou-3.jpg',
  },
]
