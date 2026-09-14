import PageHeader from "../../../components/common/PageHeader/PageHeader.tsx";
import TicketForm from "./components/TicketForm";
import BackButton from "../../../components/common/BackButton/BackButton.tsx";

export default function AddTicket() {
  return (
    <div>
      <BackButton className="mt-6 mb-10" />
      <PageHeader />
      <div className="max-w-4xl mx-auto">
        <TicketForm />
      </div>
    </div>
  );
}
