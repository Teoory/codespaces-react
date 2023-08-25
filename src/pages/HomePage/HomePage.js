import React, { useEffect, useState } from 'react';
import './style/HomePage.css'
import Berkay from './components/BerkayKoksal.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

const skills = [
  {name: 'UNITY / C#', progress: 70},
  {name: 'React / JS', progress: 60},
  {name: 'CSS', progress: 75},
  {name: 'UI & GRAPHIC DESIGN', progress: 60}
]

const SkillBar = ({ name, progress }) => (
  <div className="skill">
    <div className="skill-name">{name}</div>
    <div className="skill-bar">
      <div className="skill-progress" style={{ width: `${progress}%` }}>{"%"+progress}</div>
    </div>
  </div>
);

const counters = [
  { title: 'Bloglar', value: '2', icon: faBlog },
  { title: 'Sayfalar', value: '5', icon: faFileLines },
  { title: 'Oyunlar', value: '3', icon: faGamepad },
  { title: 'Kahveler', value: '75+', icon: faMugSaucer }
];



const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  

  useEffect(() => {
    
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".dots-container");

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
      });

      updateActiveDot(index);

      setCurrentSlide(index);
    }

    function nextSlide() {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }

    function updateActiveDot(index) {
      const dots = dotsContainer.querySelectorAll(".dot");
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    dotsContainer.addEventListener("click", function(event) {
      if (event.target.classList.contains("dot")) {
        const index = Array.from(dotsContainer.children).indexOf(event.target);
        showSlide(index);
      }
    });

    const interval = setInterval(() => {
      nextSlide();
    }, 25000);

    showSlide(0);

    return () => {
      clearInterval(interval);
      document.body.removeChild(script);
    };
  }, [currentSlide]);

  return (
    <div>
      <header id="top-bg"></header>
      <div id="main-page">
        <div id="info">
          <div id="infom">
            <div id="left">
              <img src={Berkay} alt="ProfilPhoto" />
            </div>
            <div id="right">
              <a href="#about" id="right-info">INFO</a>
              <h1><span>Merhaba Ben</span> Berkay Köksal</h1>
              <h2>Game & Web Developer from UNITY and React</h2>
              <div id="my-connections">
                <div id="my-con-li">
                  <a href="https://github.com/Teoory" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i></a></div>
                <div id="my-con-li">
                  <a href="https://www.linkedin.com/in/berkay-koksal/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i></a></div>
                <div id="my-con-li">
                  <a href="https://www.youtube.com/channel/UCliuuQd0zXmY0wGLoM197cg" target="_blank" rel="noreferrer">
                    <i className="fab fa-youtube"></i></a></div>
                <div id="my-con-li">
                <a href="https://www.instagram.com/berkay_koksal_" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i></a></div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="about">
            <p>Merhaba ben Berkay Köksal, Sakarya'da ikamet ediyorum. Liseye giderken UNITY programında C# ile kendime oyunlar yapmaya başladım daha sonrasında localhost üzerinden internet sitesi için frontend çalışmalar yaptım. JavaScript üzerinden server kurmayı ve o serverda local oynanabilen multiplayer oyun yaptım. Güneşler Anadolu Lisesi'nin sayısal bölümünden mezun olduktan sonra Sakarya Uygulamalı Bilimler Üniversitesi Denizcilik Meslek Yüksekokulunun Gemi inşaatı bölümde okumaya başladım. Okulum esnasında Esenkıyı Denizcilik firmasında bakım ve onarım depatmanında staj yapma fırsatım oldu. Universitemin 4.yarıyılı GEPES Group/Geluxya firmasında staj yaptım. Üniversiteden 3,43/4 diploma notu ile mezun oldum. 
                <br></br><br></br>Şuan gerçekten tutkulu olduğum ve hayalim olan bölüme yönelerek Anadolu Üniversitesi Bilgisayar Programcılığı bölümüne girdim ayrıca 34 bin adayın başvurduğu Google Oyun ve Uygulama Akademisine seçildim. Akademide 8 ay boyunca UNITY üzerinden oyun geliştirme ve Flutter üzerinden uygulama geliştirme eğitimleri aldım. 
                React, CSS, JavaScript, Unity öncelikli ilgi alanlarım.
                <br></br>GitHub: https://github.com/Teoory
              </p>


            <div id="exp">
            <h2 id="head-name">Yatkinlik</h2>
              {skills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} progress={skill.progress} />
              ))}
            </div>

            <h2 id="head-name">Guncel Veriler</h2>

            <div id="counter">
              {counters.map((counter, index) => (
                <div id="counter-item" key={index}>
                  <FontAwesomeIcon icon={counter.icon} id="counter-icon" />
                  <div>{counter.title}</div>
                  <div>{counter.value}</div>
                </div>
              ))}
            </div>

            <h2 id="head-name">Projeler</h2>
            <div className="slideshow-container">
                <div className="slider">
                    <div className="slide">
                        <div className="slider-content">
                            <div className="bottom-left">
                                <h1>Mobile Game</h1>
                                <h2>CubeMover</h2>
                                <p>Mobil hyper-casual tarzında oyun, küplerin üstünden düşmemen gerekiyor. Eğer yeterince hayatta kalmayı başarırsan kazandığın paralarla kendine belki bir şapka alabilirsin.</p>                    
                                <div className="external-box">
                                    <div className="arrow">&#10095;</div>
                                    <a className="learn-more" href="/index.html#ac">Detay</a>
                                </div>
                            </div>
                            <div className="bottom-right">
                                <img src="https://techcrunch.com/wp-content/uploads/2017/06/mobile-games-sensor-tower.jpg" alt="mobile-game"/>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slider-content">
                            <div className="bottom-left">
                                <h1>Mobile Game</h1>
                                <h2>CubeFinder</h2>
                                <p>Mobil hyper-casual tarzında oyun, küplerin üstünden düşmeden ve move limitini doldurmadan bayrağı bulman gerekiyor. Eğer Levalları başarıyla geçebilirsen kazandığın paralarla kendine belki bir şapka alabilirsin.</p>                    
                                <div className="external-box">
                                    <div className="arrow">&#10095;</div>
                                    <a className="learn-more" href="/index.html#ac">Detay</a>
                                </div>
                            </div>
                            <div className="bottom-right">
                                <img src="https://wittysparks.com/wp-content/uploads/2018/05/mobile-games.jpg" alt="mobile-game"/>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slider-content">
                            <div className="bottom-left">
                                <h1>Web Dev</h1>
                                <h2>Benimsitem.live</h2>
                                <p>Kişisel Website.</p>                    
                                <div className="external-box">
                                    <div className="arrow">&#10095;</div>
                                    <a className="learn-more" href="/index.html#ac">Detay</a>
                                </div>
                            </div>
                            <div className="bottom-right">
                                <img src="https://www.forbes.com/advisor/wp-content/uploads/2022/03/build_a_website_for_free_-_article_image.jpg" alt="web"/>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slider-content">
                            <div className="bottom-left">
                                <h1>Web Dev</h1>
                                <h2>teoory.github.io/_u83jsonreader/</h2>
                                <p>U-83 oyunu için verilerin görüntülenebildiği basit bir website.</p>                    
                                <div className="external-box">
                                    <div className="arrow">&#10095;</div>
                                    <a className="learn-more" href="/index.html#ac">Detay</a>
                                </div>
                            </div>
                            <div className="bottom-right">
                                <img src="https://www.forbes.com/advisor/wp-content/uploads/2022/03/build_a_website_for_free_-_article_image.jpg" alt="web"/>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slider-content">
                            <div className="bottom-left">
                                <h1>Steam Game</h1>
                                <h2>U-83</h2>
                                <p>Saf hack and slash aksiyonunu hissedeceğiniz bu oyunda bir yandan düşmanlarla mücadele ederken bir yandan amacınızı keşfedin. Kimsin, neden buradasın? Sorularına cevap bulabilecek misin? Sürükleyici hikayesi, stilistik grafik tarzı ve hızlı mekanikleriyle UNKNOWN 83 karşınızda.</p>                    
                                <div className="external-box">
                                    <div className="arrow">&#10095;</div>
                                    <a className="learn-more" href="/index.html#ac">Detay</a>
                                </div>
                            </div>
                            <div className="bottom-right">
                                <img src="https://geek360.com.br/wp-content/uploads/2022/07/O-Que-e-Steam.jpg" alt="steam-game"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="dots-container">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
            

            <h2 id="head-name">Iletisim</h2>
            <div id="contact">
              <a href="mailto:teorycrew@gmail.com" target="_blank" rel="noreferrer" id='mailto'>E-posta Gönder</a>
              <a href="https://discord.gg/CBhCPPh5Fv" target="_blank" rel="noreferrer" id='mailto'>Discord</a>
              <a href="https://www.instagram.com/berkay_koksal_" target="_blank" rel="noreferrer"  id='mailto'>instagram</a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default HomePage