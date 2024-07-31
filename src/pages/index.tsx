import Wrapper from '@/widgets/Wrapper';
import Tabs from '@/widgets/Tabs';
import { tabsTitles } from '@/shared/lib/data';

function App() {
  return (
    <Wrapper>
      <Tabs titles={tabsTitles} />
    </Wrapper>
  );
}

export default App;
