import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useRole from "../../../hooks/useRole";
import AdminStatistics from "../Admin/AdminStatistics";
import GuestStatistics from "../Guest/GuestStatistics";
import HostStatistics from "../Host/HostStatistics";

const Statistics = () => {
    const [role, isLoading] = useRole();
    { isLoading && <LoadingSpinner /> }

    return (
        <div>
            {role === 'admin' && <AdminStatistics />}
            {role === 'host' && <HostStatistics />}
            {role === 'guest' && <GuestStatistics />}
        </div>
    );
};

export default Statistics;