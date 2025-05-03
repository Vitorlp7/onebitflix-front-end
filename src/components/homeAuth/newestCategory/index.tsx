import courseService from "../../../services/courseService"
import styles from "../../../../styles/slideCategory.module.scss"
import useSWR from "swr"
import SlideComponent from "../../common/slideComponent"
import PageSpinner from "../../common/spinner"

const NewestCategory = () => {
    const {data, error} = useSWR("/newest", courseService.getNewestCourses)

    if(error) return error
    if(!data) {
        return <PageSpinner/>
    }
    return(
        <>
            <p className={styles.titleCategory}>Lançamentos</p>
            <SlideComponent course={data.data}/>
        </>
    )
}

export default NewestCategory