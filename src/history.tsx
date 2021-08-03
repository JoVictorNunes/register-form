import { createBrowserHistory } from 'history';

export default createBrowserHistory<{ name: string, last_name: string, email: string, cpf: string, password: string, re_password: string, }>();