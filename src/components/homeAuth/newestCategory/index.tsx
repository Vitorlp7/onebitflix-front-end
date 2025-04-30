import courseService from "../../../services/courseService"
import styles from "../../../../styles/slideCategory.module.scss"
import { error } from "console"
import useSWR from "swr"
import SlideComponent from "../../common/slideComponent"

const NewestCategory = () => {
    const {data, error} = useSWR("/newest", courseService.getNewestCourses)

    if(error) return error
    if(!data) return (
        <>
            <p>Loading...</p>
        </>
    )
    return(
        <>
            <p className={styles.titleCategory}>Lançamentos</p>
            <SlideComponent course={data.data}/>
        </>
    )
}

export default NewestCategory