function MiddlePageWrap({children}) {
  return (
    <div className="middlePage">
      <div className="postbar ">
        <div className="PostBarMain">
          <div className="setHeight">
            <div className="MainReels">
              <div className="container text-center ">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddlePageWrap;
