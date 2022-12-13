import React, { useEffect, useState } from 'react';
import Render from './component/render';
import PageNation from './component/pagenation'

// import agoraStatesDiscussions from './data';

import './App.css';

function Header(){
  return (
    <header className="App-header">
        <img
          class="logo"
          src="./cat-5579221_640-removebg-preview.png"
          alt="CODE_STATES_LOGO"
          id="cat"
        />
    </header>
  )
}

function Input({res, setRes}){
  let [name, setName] = useState('');
  let [title, setTitle] = useState('');
  let [msg, setMsg] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleChangeMsg = (e) => {
    setMsg(e.target.value);
  }

  const handleUpdateRes = ()=>{
    const info = {
      id: "Random Id",
      createdAt: "2022-05-16T01:02:17Z",
      title: title,
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/45",
      author: name,
      answer: {
        id: "DC_kwDOHOApLM4AKg6M",
        createdAt: "2022-05-16T02:09:52Z",
        url: "https://github.com/codestates-seb/agora-states-fe/discussions/45#discussioncomment-2756236",
        author: "Kingsenal",
        bodyHTML:
          '<p dir="auto">안녕하세요. <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/dubipy/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/dubipy">@dubipy</a> 님!<br>\n코드스테이츠 교육 엔지니어 권준혁 입니다. <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">질문 주신 내용은 노드 환경이 구성되어 있지 않기 때문에 발생되는 문제로 확인됩니다.</p>\n<p dir="auto"><code class="notranslate">brew unlink node &amp;&amp; brew link node</code></p>\n<p dir="auto">노드를 연결해 보시고 안된다면</p>\n<p dir="auto"><code class="notranslate">brew link --overwrite node</code></p>\n<p dir="auto">이 명령어를 그 다음에도 안된다면 접근권한 문제일 가능성이 큽니다.</p>\n<p dir="auto"><code class="notranslate">$ sudo chmod 776 /usr/local/lib</code> 접근 권한 변경 후<br>\n<code class="notranslate">$ brew link --overwrite node</code> 다시 연결을 해보세요 !</p>\n<p dir="auto">그럼에도 안된다면 다시 한 번 더 질문을 남겨주세요 !</p>\n<p dir="auto">답변이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 answered를 마크해주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n감사합니다.<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji><br>\n코드스테이츠 교육 엔지니어 권준혁</p>',
        avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4",
      },
      bodyHTML:
        'mol?ru',
      avatarUrl:
        "https://avatars.githubusercontent.com/u/97888923?s=64&u=12b18768cdeebcf358b70051283a3ef57be6a20f&v=4",
    }
    
    if(name&&title&&msg) setRes([info, ...res]) 
    else alert('empty');
  }
  
  return (
    <section className="form__container">
          <div action="" method="get" className="form">
            <div className="form__input--wrapper">
              <div className="form__input--name">
                <label for="name">Enter your name: </label>
                <input type="text" name="name" id="name" value={name} onChange={handleChangeName} required />
              </div>
              <div className="form__input--title">
                <label for="name">Enter your title: </label>
                <input type="text" name="name" id="title" value={title} onChange={handleChangeTitle} required />
              </div>
              <div className="form__textbox">
                <label for="story">Your question: </label>
                <textarea id="story" name="story" value={msg} onChange={handleChangeMsg}placeholder="질문을 작성하세요" required></textarea>
              </div>
            </div>
            <div className="form__submit">
              <input type="submit" value="submit" onClick={handleUpdateRes}/>
            </div>
          </div>
      </section>
  );
}

function PageList({res}) {
  let [currentPage, setCurrentPage] = useState(1);

  return(
    <div className="discussion__wrapper">
      <Render currentPage={currentPage} res={res}/>
      <PageNation currentPage={currentPage} res={res} setPage={setCurrentPage}/>
    </div>
  )
}

function App() {
  let [res, setRes] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:4000/discussions')
    .then(res => res.json())
    .then(res => setRes(res));
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <h1>My Agora States</h1>
        <Input res={res} setRes={setRes}/>
        <PageList res={res}/>
      </main>
    </div>
  );
}

export default App;
