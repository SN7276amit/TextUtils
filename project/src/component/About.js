import React from 'react'

export default function About(props) {
   let myStyle={
     color:props.mode==='dark'?'white':'#042743',
     backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white'
   }
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                   <strong> Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    textutils gives you a way to analyze your text quickly and efficiently. Be it word count, Character count
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                  <strong>Free To Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  Textutils is free character counter tool that provides instant character count and word count statistics for a given text.TextUtils reports the number of words  and characters.thus it is suitable for writing text with word / character limit
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This is Word Couter Software works in any web browser  such as chrome,firefox, internet explore,safari,opera.It suits to count characters in facebook,blogs,books,excel document,pdf document.essays,etc.
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}
