import {useContext} from 'react'
import CommentsContext from '../context/CommentsContext'
import { CommentItem } from './CommentItem';

function CommentList() {

    const {comments} = useContext(CommentsContext);



  return (
    <div className='grid grid-cols-1 justify-items-center mt-32'>
        
            {
                comments.data.comments.map((comment) => (
                    <CommentItem comment={comment} />
                ))
            }
       
    </div>
  )
}

export default CommentList