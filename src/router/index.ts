import ConsultDocument from '../pages/consult-documents';
import GetDocument from '../pages/get-documents';
import SubmitDocuments from '../pages/submit-documents';

// 默认匹配第一项怎么办？
export default [
  {path: '/', component: SubmitDocuments},
  {path: '/submit-documents', component: SubmitDocuments},
  {path: '/get-documents', component: GetDocument},
  {path: '/consult-documents', component: ConsultDocument},
]
