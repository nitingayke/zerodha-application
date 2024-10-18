import React from 'react';
import AboutTeam from './AboutTeam';

export default function About(){
    return (
        <>
            <div className='col-12 text-center my-5 text-muted pt-md-5'>
                <h2 className='fw-semibold'>We pioneered the discount broking model in India.</h2>
                <h2 className='fw-semibold'>Now, we are breaking ground with our technology.</h2>    
            </div> 

            <div className='d-flex flex-wrap text-muted justify-content-evenly'>
                <div className='col-12 col-md-6 py-4 px-md-5'>
                    <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                    <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className='col-12 col-md-6 py-4 px-md-5'>
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p><span className='gray-link'>Rainmatter</span>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <span className='gray-link'>blog</span> or see what the media is <span className='gray-link'>saying about us.</span></p>
                </div>

                <p className='col-12 text-center fs-2 fw-semibold my-4'>People</p>
                <div className='d-flex flex-wrap justify-content-evenly py-5'>
                    <div className='col-12 col-md-5 text-center'>
                        <img src="/assets/nithin-kamath.jpg" alt="" className='img-fluid rounded-circle col-lg-9 px-5 p-md-3 p-lg-3'/>
                        <p className='fs-5 m-0 pb-2 pt-4'>Nithin Kamath</p>
                        <p className='fs-16 text-secondary'>Founder, CEO</p>
                    </div>
                    <div className='fs-16 col-12 col-md-5'>
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>Playing basketball is his zen.</p>
                        <p>Connect on <span className='gray-link'>Homepage</span> / <span className='gray-link'>TradingQnA</span> / <span className='gray-link'>TradingQnA</span></p>
                    </div>
                </div>

                <section className='d-flex flex-wrap justify-content-between pb-5'>
                    <AboutTeam imgUrl={"/assets/Nikhil.jpg"} name={"Nikhil Kamath"} position={"Co-founder & CFO"} about={"Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess."}/>
                    <AboutTeam imgUrl={"/assets/Kailash.jpg"} name={"Dr. Kailash Nadh"} position={"CTO"} about={"Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day."}/>
                    <AboutTeam imgUrl={"/assets/Venu.jpg"} name={"Venu Madhav"} position={"COO"} about={"Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha."}/>
                </section>
                <section className='d-flex flex-wrap justify-content-between pb-5'>
                    <AboutTeam imgUrl={"https://zerodha.com/static/images/Hanan.jpg"} name={"Hanan Delvi"} position={"CCO"} about={"We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time."}/>
                    <AboutTeam imgUrl={"https://zerodha.com/static/images/Seema.jpg"} name={"Seema Patil"} position={"Director"} about={"Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast."}/>
                    <AboutTeam imgUrl={"https://zerodha.com/static/images/karthik.jpg"} name={"Karthik Rangappa"} position={"Chief of Education"} about={"Karthik 'Guru' Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography."}/>
                </section>
                <section className='d-flex flex-wrap pb-5 col-12'>
                    <AboutTeam imgUrl={"https://zerodha.com/static/images/Austin.jpg"} name={"Austin Prakesh"} position={"Director Strategy"} about={"Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches."}/>
                    <AboutTeam imgUrl={"https://assets.leetcode.com/users/Nitin_Gayke/avatar_1729062514.png"} name={"Nitin Gayke"} position={"Developer"} about={"Nitin is a dedicated developer who helped design a clone of Zerodha application. He is committed to becoming not only a skilled developer but also an exceptional problem solver. I share his ambition to start a new startup that will provide jobs to those who are currently unemployed. This is a meaningful endeavor, as it combines personal growth with a heartfelt desire to uplift others and make a positive impact in our community."}/>
                </section>
            </div>
        </>
    )
}