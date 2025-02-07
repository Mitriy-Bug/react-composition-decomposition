
import { TopContent } from "./Contayners/TopContent";
import { Search } from "./Contayners/Search";
import { Banner } from "./components/banners/Banner";
import { LowerContent } from "./Contayners/LowerContent";
import './App.css'

// пропсы для компонента TopContent
export const topcontent = { 
  topicTitle: [
   "Сейчас в СМИ",
    "в Германии",
    "Рекомендуем", 
  ],

  date: '31 июля, среда 02 32',
     
  newsList: [
    {after: "вести", text: "Путин упростил получение мобильных номеров", icon: "iconNews/redNews.jpg"},
    {after: "вести", text:"В команде Зеленского раскрыли план реформ на Украине", icon: "iconNews/redNews.jpg"},
    {after: "Неизвестный", text:"'Турпомощ' прокоментировала гибель десятков россиян в Анталье ", icon: "iconNews/hugo.jpg"},
    {after: "Неизвестный", text:"Суд закрыл дело Демпартии США против России", icon: "iconNews/hugo.jpg"},
    {after: "весНеизвестный", text:"Еще одна новость", icon: "iconNews/hugo.jpg"},
  ],

  stockPrises: [
     {name: 'USD MOEX', prise: 63.52, percent: "+" + 0.09},
    {name: 'EUR MOEX', prise: 63.52, percent: "+" + 0.14},
    {name: 'НЕФТЬ', prise: 64.90, percent: "+" + 1.63 + "%"},
  ]
 }

 export const search = {
  nameButton: "поиск",
  navBarTiitle: ["Видео", "Картинки", "Новости", "Карты", "Маркет", "Переводчик", "Эфир", "ещё",]
 }

 const banner = 'baners/2222235.png'; //баннер для компонента Banner

 // пропсы для компонента LowerContent
 export const lowerContent = {
  title: {
    columLeftFirstTitle: 'Погода',
    columLeftSecondTitle: 'Посещаемое',
    columnCenterFirstTitle: "Карта Германии",
    columnCenterSecondTitle: "Телепрограмма",
    columnRightTitle: "Эфир",
  },
  
  weather: {
    weatherIcon: 'iconWeather/1584881280_2430.png',
    temperature: '+17',
    morningTemperature: "+17",
    daiTemperature: "+17",
  },

  visited: [
    "Недвижимость - о сталинках",
    "Маркет - люстры и светильники",
    "Авто.ру - привод 4x4 до 500 000",
  ],

  columnCenterFirstInfo: "Расписание",

  programmTV: [
    {programm: "02:00 ТНТ.Best ТНТ", canal: "ТНТ internetional"},
    {programm: "02:00 ТНТ.Best ТНТ", canal: "Карусель INT"},
    {programm: "02:00 ТНТ.Best ТНТ", canal: "Первый"},
  ],

  air: [
    {programm: "Управление как искуство", canal: "Успех"},
    {programm: "Ночь. Мир в это время", canal: "eathTV"},
    {programm: "Андрей Возн...", canal: "Совершенно секретно"}, 
  ]

 }

function App() {
  return (
    <>
      <TopContent top={topcontent} />
      <Search srh={search}/>        
      <Banner bn={banner} />
      <LowerContent lc={lowerContent} />              
    </>
  )
}

export default App
