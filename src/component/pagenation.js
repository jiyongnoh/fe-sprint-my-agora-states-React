function PageNation({res, currentPage, setPage}){

  let totalPage = Math.ceil(res.length / 10); // 전체 Page 개수
  let arr = [];
  for(let i = 1; i <= totalPage; i++) arr.push(i);

  const handlePrevPage = () => {
    if(currentPage > 1) {
        setPage(currentPage-1);
    }    
  }

  const handleNextPage = () => {
    if(currentPage < totalPage) {
        setPage(currentPage+1);
    }    
  }

  const handleChangePage = (e) => {

    setPage(e.target.value);
  }

  const paging = (index) => {
    return (
        <li className={`pageLi num${index}` + (currentPage===index ? ' selected' : '')} 
            value = {index} 
            onClick={handleChangePage}
            key={index}
            >
            {index}
        </li>
    )
  }

    return(
        <ul id="pageList">
            <li className = 'pageLi' onClick={handlePrevPage}>
                {'<prev'}
            </li>

            {arr.map(el => {
                return paging(el);
            })}

            <li className = 'pageLi' onClick={handleNextPage}>
                {'next>'}
            </li>
        </ul>
    );
}

export default PageNation;