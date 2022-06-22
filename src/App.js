
import { CommentsProvider } from './context/CommentsContext';
import CommentList from './components/CommentList';


function App() {
  return (
    <CommentsProvider>
      <CommentList/>
    </CommentsProvider>
  );
}

export default App;
