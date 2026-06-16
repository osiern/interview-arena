import {BrowserRouter, Route, Routes} from 'react-router-dom';

import TopicPage from '../pages/TopicPage';
import TopicsPage from '../pages/TopicsPage';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<TopicsPage />}
                />

                <Route
                    path="/topic/:topicId"
                    element={<TopicPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;