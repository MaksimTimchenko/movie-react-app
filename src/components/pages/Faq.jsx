import React,{useState} from 'react'
import Header from '../Header';

const Faq = () => {
   const [faqs, setFaqs] = useState([
    {
      question: 'What is WatchFlix ?',
      answer: 'WatchFlix is a video streaming service that lets you watch a variety of award-winning TV shows, movies, anime, documentaries and more on thousands of Internet-connected devices.You can watch as much as you want, whenever you want, without ads, all for one low monthly price. You will always find something new for yourself. Plus, more TV shows and movies are added every week!',
      open: false  
    },
    {
      question: 'Where you can divide the content ?',
      answer: 'Watch anywhere, anytime. Sign in to your WatchFlix account to watch content online at WatchFlix.com from your personal computer or any Internet-enabled device that has the WatchFlix app, such as a Smart TV, smartphone, tablet, streaming media player, or game console',
      open: false  
    },
    {
      question: 'What you can watch on WatchFlix ?',
      answer: 'WatchFlix offers an extensive library of feature films, documentaries, TV series, anime, award-winning original content and more. Watch as much as you want, whenever you want',
      open: true  
    },

   ])

   const toggleFAQ = index => {
    setFaqs(faqs.map((faq,i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false
      }

      return faq;
    }))
   }
    
  return (
    <div className='mt-[100px] '>
      <Header/>
      <div className='container mx-auto pb-10 flex flex-col items-center'>
          <h2 className="pb-[20px] font-bold text-3xl">FAQs about the topic</h2>

        {
          faqs.map((item,i) => (
            <>
            <View faq={item} index={i} toggleFAQ={toggleFAQ}/>
            </>
          ))
        }
      </div>
    </div>
  )
}

const View = ({faq, index, toggleFAQ}) => {

  return(
  <div className={` relative  text-center my-3.5 mx-3.5 py-3.5 px-3.5 bg-slate-700 rounded-lg `}
        key={index}
        onClick={()=>toggleFAQ(index)}>
        <div className={`faq-quest relative 
        font-bold
        after:content-[""]
        after:absolute after:top-[50%]
        after:left-[95%] 
        after:translate-y-[-50%]
        after:w-[30px] 
        after:h-[30px] 
        after:bg-hero-pattern
        after:bg-center
        after:bg-contain	
        after:bg-no-repeat
        ease-in-out
        transition-all
        deley-500
        
        ${faq.open ? 'pb-3.5 after:rotate-180' : ''}
        `}>
          {faq.question}
        </div>
        <div className={`
        faq-answer
        max-h-0
        overflow-y-hidden
        transition-all
        delay-300
        text-start
        w-[80%]
        ${faq.open ? 'max-h-[1000px] opacity-100' : ''} 	`}>
          {faq.answer}
        </div>
  </div>
  )
}


export default Faq