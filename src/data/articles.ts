export type Article = {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
}

export const ARTICLE_CATEGORIES = [
  'Tất cả',
  'Du lịch',
  'Văn hóa',
  'Ẩm thực',
  'Lịch sử',
  'Cộng đồng',
] as const

export const articles: Article[] = [
  {
    id: '1',
    title: 'Hành trình trên đường Hồ Chí Minh',
    excerpt: 'Cột mốc lịch sử và những câu chuyện còn mãi trong lòng người dân.',
    category: 'Lịch sử',
    date: '2025-11-02',
  },
  {
    id: '2',
    title: 'Phố cổ Hội An khi đèn lên',
    excerpt: 'Ánh đèn lồng và nhịp sống yên bình của phố thuyền.',
    category: 'Du lịch',
    date: '2025-10-18',
  },
  {
    id: '3',
    title: 'Phở: tô nước dùng của gia đình',
    excerpt: 'Từ gánh hàng đến quán quen — hương vị gắn kết thế hệ.',
    category: 'Ẩm thực',
    date: '2025-09-30',
  },
  {
    id: '4',
    title: 'Nhạc dân tộc trong đời sống hiện đại',
    excerpt: 'Cách các nghệ sĩ trẻ làm mới sáo, đàn tranh và cồng chiêng.',
    category: 'Văn hóa',
    date: '2025-09-12',
  },
  {
    id: '5',
    title: 'Tình nguyện mùa hè xanh',
    excerpt: 'Sinh viên và những ngày đồng hành cùng bà con vùng cao.',
    category: 'Cộng đồng',
    date: '2025-08-25',
  },
  {
    id: '6',
    title: 'Ruộng bậc thang Mù Cang Chải',
    excerpt: 'Mùa nước đổ và mùa vàng — bức tranh đất trời Tây Bắc.',
    category: 'Du lịch',
    date: '2025-08-08',
  },
]
