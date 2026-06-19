import { BrowserRouter, Route, Routes } from 'react-router-dom';

import QuestionPage from '../pages/QuestionPage';
import TopicPage from '../pages/TopicPage';
import TopicsPage from '../pages/TopicsPage';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TopicsPage />} />

                <Route path="/topic/:topicId" element={<TopicPage />} />
                <Route
                    path="/topic/:topicId/:questionId"
                    element={<QuestionPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
