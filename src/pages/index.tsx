import Tabs from '@/shared/ui/molecules/Tabs';
import { tabsTitles } from '@/shared/lib/data';
import Wrapper from '@/widgets/Wrapper';

function App() {
  return (
    <Wrapper>
      <Tabs titles={tabsTitles} />
    </Wrapper>
  );
}

export default App;
