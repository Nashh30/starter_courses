import { click } from '@testing-library/user-event/dist/click';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';



const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        //logic of FcLike
        if(likedCourses.includes(course.id)) {
            // let say some courses were previously liked
            setLikedCourses( (prev) => prev.filter((cid) => (cid !== course.id)) );
            toast.warning("Like Removed");
        }
        else{
            //we will check if any course was previously liked or not
            //let say no course is added then we will add liked courses
            if(likedCourses.length === 0) {
                setLikedCourses([course.id]);
                console.log("course removed");
            }
            else{
                //some course is there already so we will add new course with that
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
            console.log("course liked");
        }
        

    }

   
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
        <div className="relative">
            <img src={course.image.url} ></img>

            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem" />) : 
                        (<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                     
                </button>
            </div>
        </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {
                    course.description.length>100 ?
                    (course.description.substr(0,100)) + "..." :
                    (course.description)
                    }  
                    </p>
            </div>

    </div>
  )
}

export default Card;
