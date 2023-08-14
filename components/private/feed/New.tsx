import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {HiPhotograph} from 'react-icons/hi';
import { AiOutlineLink } from "react-icons/ai";


const New = () => {
  return (
    <article className="h-62 flex-1 bg-white rounded-md shadow-md flex flex-col gap-2 p-4">
      <Textarea placeholder="What do you feel like sharing today?" />
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button variant="secondary"><HiPhotograph className="mr-2"/> Photo</Button>
          <Button variant="outline"><AiOutlineLink className="mr-2" /> URL</Button>
        </div>
        <Button>Post</Button>
      </div>
    </article>
  );
};

export default New;
