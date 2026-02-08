import { v4 as uuidv4 } from "uuid"
export const courses = [
  { id: uuidv4(), title: 'Frontend Development', description: 'HTML, CSS, JS', price: '$100' },
  { id: uuidv4(), title: 'Backend Development', description: 'Node.js, Express', price: '$120' },
  { id: uuidv4(), title: 'React JS', description: 'React Hooks, Router', price: '$150' },
  { id: uuidv4(), title: 'Python Programming', description: 'Python Basics', price: '$90' }
]
export const reviews = [
  { id: uuidv4(), title: 'Eco Schools', name: 'UNESCO', role: "O'qituvchi", img: '/img/yapon-tili.png' },
  { id: uuidv4(), title: 'National Geographic Kids', name: 'Kids kontent', role: "O'qituvchi", img: '/img/ind.png' },
  { id: uuidv4(), title: "YouTube Kids", name: 'Eko kontent', role: "O'qituvchi", img: '/img/uz.png' },
  { id: uuidv4(), title: 'WWF Education', name: 'Kids', role: "O'qituvchi", img: '/img/ielts.png' },
  { id: uuidv4(), title: 'Yam-yashil', name: 'Eko loyiha', role: "O'qituvchi", img: '/img/ielts.png' },
]
export const lessons = [
  { id: uuidv4(), name: 'Rus tili', time: '00:00 - 02:00', color: '#eef6ff' },
  { id: uuidv4(), name: 'Xitoy tili', time: '02:00 - 04:00', color: '#f0faf5' },
  { id: uuidv4(), name: 'Turk tili', time: '04:00 - 06:00', color: '#fff5eb' },
  { id: uuidv4(), name: 'Ispan tili', time: '06:00 - 08:00', color: '#eef6ff' },
  { id: uuidv4(), name: 'Ingliz tili', time: '08:00 - 10:00', color: '#f0faf5' },
  { id: uuidv4(), name: 'IELTS darslari', time: '10:00 - 12:00', color: '#f0fad4' },
]
export const featureList = [
  { id: uuidv4(), title: "freeEducation", desc: "freeEduDesc", icon: "/icons/magic-icon.svg" },
  { id: uuidv4(), title: "interactiveTitle", desc: "interactiveDesc", icon: "/icons/magic-icon.svg" },
  { id: uuidv4(), title: "aiTitle", desc: "aiDesc", icon: "/icons/magic-icon.svg" },
  { id: uuidv4(), title: "certification", desc: "certificationDesc", icon: "/icons/magic-icon.svg" },
  { id: uuidv4(), title: "children", desc: "childrenDesc", icon: "/icons/magic-icon.svg" }
]
export const statsData = [
  { id: uuidv4(), title: "Umumiy foydalanuvchilar", value: "2 669 183", icon: "👥", },
  { id: uuidv4(), title: "Mavjud kurslar soni", value: "30", icon: "📖", },
  { id: uuidv4(), title: "Sertifikat olganlar", value: "2 125 533", icon: "🎓", }
]
export const questions = [
  {
    questionText: "Tabiatni asrash uchun nima qilishimiz kerak?",
    answerOptions: [
      { text: "Daraxtlarni kesish", isCorrect: false },
      { text: "Atrofga axlat tashlamaslik", isCorrect: true },
      { text: "Suvni ochiq qoldirish", isCorrect: false },
      { text: "Gullarni yulib olish", isCorrect: false },
    ],
  },
  {
    questionText: "Qaysi biri 'yashil' va toza energiya beradi?",
    answerOptions: [
      { text: "Quyosh nuri", isCorrect: true },
      { text: "Avtomobil tutuni", isCorrect: false },
      { text: "Yongan plastmassa", isCorrect: false },
      { text: "Eski batareyalar", isCorrect: false },
    ],
  },
  {
    questionText: "Axlatlarni qayerga tashlash to'g'ri?",
    answerOptions: [
      { text: "Daryoga", isCorrect: false },
      { text: "Maxsus axlat qutilariga", isCorrect: true },
      { text: "Ko'chaga", isCorrect: false },
      { text: "Derazadan tashqariga", isCorrect: false },
    ],
  },
  {
    questionText: "Daraxtlar bizga nima beradi?",
    answerOptions: [
      { text: "Shirinliklar", isCorrect: false },
      { text: "Toza havo", isCorrect: true },
      { text: "O'yinchoqlar", isCorrect: false },
      { text: "Kompyuter o'yinlari", isCorrect: false },
    ],
  },
  {
    questionText: "Suvni qanday tejash mumkin?",
    answerOptions: [
      { text: "Tish yuvayotganda kranni yopish", isCorrect: true },
      { text: "Suv bilan ko'p o'ynash", isCorrect: false },
      { text: "Kranni mahkam yopmaslik", isCorrect: false },
      { text: "Hamma suvni yerga to'kish", isCorrect: false },
    ],
  },
  {
    questionText: "Do'konga borganimizda qaysi biri tabiatga zarar yetkazmaydi?",
    answerOptions: [
      { text: "Plastik paket (paketcha)", isCorrect: false },
      { text: "Mato xalta (eko-sumka)", isCorrect: true },
      { text: "Qog'ozni ko'chaga tashlash", isCorrect: false },
      { text: "Yegulikni isrof qilish", isCorrect: false },
    ],
  },
  {
    questionText: "Eski qog'oz va jurnallardan nima qilish mumkin?",
    answerOptions: [
      { text: "Yoqib yuborish", isCorrect: false },
      { text: "Yangi qog'oz tayyorlash (qayta ishlash)", isCorrect: true },
      { text: "Hammasini axlatga otish", isCorrect: false },
      { text: "Daryoga oqizish", isCorrect: false },
    ],
  },
  {
    questionText: "Hayvonlarga qanday yordam berishimiz mumkin?",
    answerOptions: [
      { text: "Uyalarni buzish", isCorrect: false },
      { text: "Ularga ozor berish", isCorrect: false },
      { text: "Qishda qushlarga don berish", isCorrect: true },
      { text: "Yashash joylarini iflos qilish", isCorrect: false },
    ],
  },
  {
    questionText: "Xonadan chiqayotganda nima qilishni unutmasligimiz kerak?",
    answerOptions: [
      { text: "Chiroqni o'chirib chiqish", isCorrect: true },
      { text: "Televizorni yoqiq qoldirish", isCorrect: false },
      { text: "Chiroqlarning hammasini yoqish", isCorrect: false },
      { text: "Eshikni ochiq qoldirish", isCorrect: false },
    ],
  },
  {
    questionText: "Yozda o'simliklarga qanday g'amxo'rlik qilinadi?",
    answerOptions: [
      { text: "Ularni quyoshda qoldirish", isCorrect: false },
      { text: "Barglarini uzib tashlash", isCorrect: false },
      { text: "Vaqtida suv quyish", isCorrect: true },
      { text: "Atrofini beton qilish", isCorrect: false },
    ],
  },
]