export type Story = {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
}

export const STORY_CATEGORIES = [
  'Tất cả',
  'Gia đình',
  'Tuổi trẻ',
  'Đồng đội',
  'Quê hương',
  'Ước mơ',
] as const

export const stories: Story[] = [
  {
    id: 's1',
    title: 'Bức thư của bố từ đường Trường Sơn',
    excerpt: 'Những dòng chữ không đề ngày tháng nhưng đủ sưởi ấm cả mùa đông.',
    category: 'Gia đình',
    date: '2025-10-01',
  },
  {
    id: 's2',
    title: 'Chiếc xe đạp đến trường',
    excerpt: 'Hai anh em chia nhau một chiếc — ai đến trước, người kia đợi.',
    category: 'Tuổi trẻ',
    date: '2025-09-20',
  },
  {
    id: 's3',
    title: 'Canh giữ đêm trăng trên biển',
    excerpt: 'Nhóm bạn trẻ cùng nhau dọn rác và kể chuyện cổ tích.',
    category: 'Đồng đội',
    date: '2025-09-05',
  },
  {
    id: 's4',
    title: 'Hạt gạo cuối cùng',
    excerpt: 'Câu chuyện về sự dũng cảm của người mẹ trong những ngày khó khăn.',
    category: 'Quê hương',
    date: '2025-08-15',
  },
  {
    id: 's5',
    title: 'Cánh diều trên đồng',
    excerpt: 'Ước mơ bay cao của cậu bé làm nông trên cánh đồng quê.',
    category: 'Ước mơ',
    date: '2025-07-28',
  },
]
