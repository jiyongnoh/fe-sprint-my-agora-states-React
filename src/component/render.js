function ConvertToDiscussion ({obj}){
    return (
        <li className='discussion__container'>
            <div className='discussion__avatar--wrapper'>
                <img 
                className='discussion__avatar--image'
                src = {obj.avatarUrl}
                alt = {'avatar of ' + obj.author}
                />
            </div>
            <div className='discussion__content'>
                <h3 className='discussion__title'>
                    <a href={obj.url}>{obj.title}</a>
                </h3>
                <div className="discussion__information">{`${obj.author} ${obj.createdAt}`}</div>
            </div>  
            <div className='discussion__answered'>
                <div className='discussion__answered'>
                    <p>{!obj.answer ? '☑' : '☒'}</p>
                </div>
            </div>
        </li>
    );
  };

function Render({ currentPage, res }){
	let first = (currentPage - 1) * 10;
	let last = currentPage * 10;
	if(last > res.length) last = res.length;

	let array = res.slice(first, last);

    const render = (arr) => {
        return arr.map(el => {
            return <ConvertToDiscussion obj = {el} key={el.id}/>
        })
    }
    
	return (
        <ul className="discussions__container">
            {render(array)}
        </ul>
    )       
    
} 

export default Render;
