import { CourseType } from "@/src/services/courseService";
import styles from "./styles.module.scss";
import { Button, Container } from "reactstrap";
import SlideComponent from "../../common/slideComponent";
import Link from "next/link";

interface props {
  newestCourses: CourseType[];
}

const SlideSection = ({ newestCourses }: props) => {
  return (
    <>
      <Container fluid className="d-flex flex-column align-items-center py-5">
        <p className={styles.sectionTitle}>Aulas já disponíveis</p>
        <SlideComponent course={newestCourses} />
        <Link href="/register">
          <Button className={styles.slideSectionBtn} outline color="light">
            Se cadastre para acessar!
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default SlideSection;
