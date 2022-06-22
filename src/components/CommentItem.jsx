

export const CommentItem = (props) => {
    console.log(props.comment.user.image.png)


    const image_url = props.comment.user.image.png

  return (
    <div className="w-3/5 shadow shadow-md flex shadow-red-500 bg-stone-100 mb-2 p-4 rounded-lg">
        <div className="flex flex-col w-6 bg-red-300 rounded-lg">
            <button className="btn btn-primary btn-sm btn-ghost">+</button>
            <h4 className="pl-1">12</h4>
            <button className="btn btn-primary btn-sm btn-ghost">-</button>
        </div>

        <div className="w-11/12 ml-4 bg-red-500">
            <div className="flex justify-between px-3 pt-1">
                <div className="flex justify-around">
                    <div className="w-10 avatar">
                        <div className=" rounded-full">
                            <img src={require(`${image_url}`)} alt=""  />
                        </div>
                    </div>

               
                </div>
                <div>zxc</div>
            </div>
            <div></div>
        </div>
    </div>
  )
}
