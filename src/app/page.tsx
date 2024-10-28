import Homepage from "@/app/homepage/Homepage";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Home(): JSX.Element {
  return (
    <PageWrapper>
      <main>
        <Homepage />
      </main>
    </PageWrapper>
  );
}
