import {useTodoListQuery} from "../../hooks/serverStateHooks/useTodoList/useTodoListQuery";

import {Spin} from 'antd';

const Home = () => {
    const {isLoading, error, data: toDoData} = useTodoListQuery();

    if (isLoading) {
        return <Spin/>;
    }

    return (
        <div>Home</div>
    )
};

export default Home;