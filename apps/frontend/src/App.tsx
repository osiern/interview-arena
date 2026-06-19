import {useEffect} from 'react';

import AppRouter from './router/AppRouter';
import {useThemeStore} from './store/themeStore';

function App() {
    const theme = useThemeStore(
        state => state.theme,
    );

    useEffect(() => {
        document.documentElement.setAttribute(
            'data-theme',
            theme,
        );
    }, [theme]);

    return <AppRouter />;
}

export default App;
