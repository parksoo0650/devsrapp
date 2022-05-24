import Layout from "../../src/components/AdminLayout";
import Button from "../../src/components/button";
import Input from "../../src/components/input";
import TextArea from "../../src/components/textarea";

const WeeklyCreate = () => {
    return (
        <Layout canGoBack title="주보 등록">
            <form className=" space-y-4 py-10 px-4">
                <Input
                    required
                    label="제목"
                    name="name"
                    type="text" />
                <Input
                    required
                    label="날짜"
                    name="createDate"
                    type="text"
                    placeholder=""
                />
                <TextArea
                    name="description"
                    label="내용"
                />
                <Button text="저장" />
            </form>
        </Layout>
    );
};

export default WeeklyCreate;