import { createStore } from "solid-js/store";
import { useParams } from "solid-start"

const [lyrics, setLyrics]= createStore([])



export default () => {

  const params = useParams();



  return <div>{params.id}</div>
}