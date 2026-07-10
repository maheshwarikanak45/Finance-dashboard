import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

const Transactions = () => {
    return(
        <div className="p-6 flex flex-col gap-6">
            <TransactionForm />
            <TransactionList />
        </div>
    )
}

export default Transactions