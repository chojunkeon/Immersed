import { lazy } from "react";
const UserProfileLayout = lazy(() =>
  import("../components/usersettings/UserLayout")
);
const SubscriptionDashboard = lazy(() =>
  import("../components/usersettings/SubscriptionsList")
);
const UserSettings = lazy(() =>
  import("../components/usersettings/UserSettings")
);
const AnalyticsDashboards = lazy(() =>
  import("../components/dashboard/analytics/Analytics")
);
const InternalAnalytics = lazy(() =>
  import("../components/dashboard/analytics/internal/InternalAnalytics")
);
const GoogleAnalytics = lazy(() =>
  import("../components/googleAnalytics/DisplayAnalytics")
);

const ZoneTable = lazy(() => import("../components/trainingzone/TablesOfZone"));
const Zone = lazy(() => import("../components/trainingzone/AddZoneConfig"));
const SearchBySpeedId = lazy(() =>
  import("../components/trainingzone/SearchBySpeedId")
);
const SearchBySpreadId = lazy(() =>
  import("../components/trainingzone/SearchBySpreadId")
);
const viewThreats = lazy(() =>
  import("../components/trainingzone/ViewThreats")
);
const Checkout = lazy(() => import("../components/checkout/Checkout"));
const BeforeSuccess = lazy(() =>
  import("../components/checkout/BeforeSuccess")
);
const CheckoutSuccess = lazy(() =>
  import("../components/checkout/SuccessPage")
);
const BlogForm = lazy(() => import("../components/blogs/BlogsFormAddEdit"));
const Blogs = lazy(() => import("../components/blogadmin/Blogs.jsx"));
const PseudoAds = lazy(() => import("../components/fakeads/PseudoAds.jsx"));
const PageNotFound = lazy(() => import("../components/error/Error404"));
const AddTraningUnits = lazy(() =>
  import("../components/trainingunits/AddTrainingUnit")
);
const TrainingUnitsOrgList = lazy(() =>
  import("../components/trainingunits/TrainingUnitsOrgList")
);
const Trainees = lazy(() => import("../components/trainees/Trainees"));
const TraineesFormAddEdit = lazy(() =>
  import("../components/trainees/TraineesFormAddEdit")
);
const Employees = lazy(() => import("../components/employees/Employees"));
const EmployeesFormComponent = lazy(() =>
  import("../components/employees/EmployeesFormComponent")
);
const AccessLogs = lazy(() => import("../components/accesslogs/AccessLogs"));

const AddFaqs = lazy(() => import("../components/faqs/faqsAddEditForm"));

const AddZoneGroup = lazy(() =>
  import("../components/zonegroups/AddZoneGroup")
);
const ZoneGroupsView = lazy(() =>
  import("../components/zonegroups/ZoneGroupsView")
);
const ZoneGroupSummary = lazy(() =>
  import("../components/zonegroups/ZoneGroupSummary")
);
const ZoneGroupOverview = lazy(() =>
  import("../components/zonegroups/ZoneGroupOverview")
);
const ZoneGroupTeam = lazy(() =>
  import("../components/zonegroups/ZoneGroupTeam")
);

const TicTacToe = lazy(() =>
  import("../components/tictactoe/TicTacToeWrapper")
);
const LogoutConsequence = lazy(() =>
  import(
    "../components/tictactoe/components/gamemodes/botmode/LogoutConsequence"
  )
);
const OrgEnrollForm = lazy(() =>
  import("../components/organizations/EnrollForm")
);
const TraineeAccounts = lazy(() =>
  import("../components/traineeaccounts/TraineeAccounts.jsx")
);

const TraineeAccountEdit = lazy(() =>
  import("../components/traineeaccounts/TraineeAccountEdit.jsx")
);
const TraineeAccountLogin = lazy(()=>
import("../components/traineeaccounts/TraineeAccountLogin"))
const TraineeAccountForm = lazy(() =>
  import("../components/traineeaccounts/TraineeAccountsForm.jsx")
);

const Actors = lazy(() => import("../components/actors/ActorsFormAddEdit"));
const ActorsHome = lazy(() => import("../components/actors/Actors"));

const JobScheduleWizard = lazy(() =>
  import("../components/cronjobs/JobScheduleWizard")
);

const Jobs = lazy(() => import("../components/cronjobs/Jobs"));

const cronjobs = [
  {
    path: "/cronjobs/add",
    name: "Jobs Form",
    element: JobScheduleWizard,
    roles: ["SysAdmin"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/cronjobs/:id/edit",
    name: "Jobs Form",
    element: JobScheduleWizard,
    roles: ["SysAdmin"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/cronjobs",
    name: "Jobs",
    element: Jobs,
    roles: ["SysAdmin"],
    exact: true,
    isAnonymous: false,
  },
];

const Zones = lazy(() => import("../components/zonescomp/AllZones.jsx"));
const AddEditZones = lazy(() =>
  import("../components/zonescomp/AddEditZone.jsx")
);
const RescueCenterShell = lazy(() =>
  import("../components/rescuecenterzone/RescueCenterShell.jsx")
);

const InstructorsClasses = lazy(() =>
  import("../components/authentication/InstructorsClasses.jsx")
);
const SecurityTips = lazy(() =>
  import("../components/rescuecenterzone/SecurityTips.jsx")
);
const SecurityReport = lazy(() =>
  import("../components/rescuecenterzone/RescueCenterReportForm.jsx")
);
const AccountRecovery = lazy(() =>
  import("../components/rescuecenterzone/AccountRecoveryForm.jsx")
);
const ConsequenceAddEdit = lazy(() =>
  import("../components/consequences/ConsequenceAddEdit.jsx")
);
const Consequences = lazy(() =>
  import("../components/consequences/Consequences")
);
const AddActorAccount = lazy(() =>
  import("../components/actoraccount/ActorAccountForm")
);
const actorAccounts = [
  {
    path: "actoraccount/add",
    name: "ActorAccountForm",
    element: AddActorAccount,
    roles: ["SysAdmin"],
    isAnonymous: false,
  },
];
const actors = [
  {
    path: "/actors",
    name: "Actors",
    element: ActorsHome,
    roles: ["SysAdmin"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/actors/add",
    name: "actorsForm",
    element: Actors,
    roles: ["SysAdmin"],
    exact: true,
    isAnonymous: false,
  },
];
const TrainingSchedule = lazy(() =>
  import("../components/trainingschedule/TrainingScheduleForm")
);
const Organizations = () => import("../components/organizations/Organizations");

const LocationForms = lazy(() => import("components/locations/LocationForms"));
const LocationsList = lazy(() => import("components/locations/LocationsList"));

const Comments = lazy(() => import("../components/comments/CommentExample"));

const Event = lazy(() => import("../components/traceability/EventInfo"));

const Report = lazy(() => import("../components/traceability/Reports"));

const TraineeList = lazy(() =>
  import("../components/traceability/TraineeList")
);

const traineeRoutes = [
  {
    path: "/usertrainees/:id",
    name: "TraineeList",
    element: TraineeList,
    roles: ["Trainee"],
    isAnonymous: false,
  },
];

const reportRoutes = [
  {
    path: "/reports",
    name: "Report",
    element: Report,
    roles: ["OrgTrainer", "OrgAdmin"],
    exact: true,
    isAnonymous: false,
  },
];

const eventRoutes = [
  {
    path: "/events/:id",
    name: "Event",
    element: Event,
    roles: ["OrgTrainer", "OrgAdmin"],
    exact: true,
    isAnonymous: false,
  },
];

const AddImageToAws = lazy(() =>
  import("../components/avataraws/AvatarLoader")
);

const avatarAws = [
  {
    path: "/avatar/add",
    name: "AddAvatarImage",
    element: AddImageToAws,
    roles: ["SysSupport"],
    exact: true,
    isAnonymous: false,
  },
];

const consequenceRoutes = [
  {
    path: "/consequences/form",
    name: "ConsequenceAddEdit",
    element: ConsequenceAddEdit,
    roles: ["SysAdmin", "OrgAdmin"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/consequences",
    name: "Consequences",
    element: Consequences,
    roles: ["SysAdmin", "OrgAdmin"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/consequences/form/:id",
    name: "ConsequenceAddEdit",
    element: ConsequenceAddEdit,
    roles: ["SysAdmin", "OrgAdmin"],
    exact: true,
    isAnonymous: false,
  },
];

const ActorWizard = lazy(() => import("../components/actorwizard/ActorWizard"));

const actorWizard = [
  {
    path: "/actorwizard",
    name: "Wizard",
    element: ActorWizard,
    roles: ["SysAdmin"],
    exact: true,
    isAnonymous: false,
  },
];

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboards",
    icon: "uil-home-alt",
    header: "Navigation",
    children: [
      {
        path: "/dashboard/analytics",
        name: "Analytics",
        element: AnalyticsDashboards,
        roles: ["OrgAdmin"],
        exact: true,
        isAnonymous: false,
      },
      {
        path: "/dashboard/analytics/internal",
        name: "AnalyticsInternal",
        element: InternalAnalytics,
        roles: ["SysAdmin"],
        exact: true,
        isAnonymous: false,
      },
      {
        path: "/dashboard/analytics/google",
        name: "Google Analytics",
        element: GoogleAnalytics,
        roles: ["SysAdmin"],
        exact: true,
        isAnonymous: false,
      },
    ],
  },
];
const rescueCenter = [
  {
    path: "/rescuecenter",
    name: "RescueCenterShell",
    exact: true,
    element: RescueCenterShell,
    roles: ["Trainee", "OrgAdmin", "OrgTrainer"],
    isAnonymous: false,
  },
  {
    path: "/rescuecenter/securitytips",
    name: "SecurityTips",
    exact: true,
    element: SecurityTips,
    roles: ["Trainee", "OrgAdmin", "OrgTrainer"],
    isAnonymous: false,
  },
  {
    path: "/rescuecenter/securityreport",
    name: "SecurityReport",
    exact: true,
    element: SecurityReport,
    roles: ["Trainee", "OrgAdmin", "OrgTrainer"],
    isAnonymous: false,
  },
  {
    path: "/rescuecenter/accountrecovery",
    name: "AccountRecovery",
    exact: true,
    element: AccountRecovery,
    roles: ["Trainee", "OrgAdmin", "OrgTrainer"],
    isAnonymous: false,
  },
];

const instructors = [
  {
    path: "/instructors",
    name: "Instructors Classes",
    exact: true,
    element: InstructorsClasses,
    roles: ["OrgAdmin", "OrgTrainer"],
    isAnonymous: false,
  },
];
const trainees = [
  {
    path: "/trainees/form",
    name: "TraineesFormAddEdit",
    exact: true,
    element: TraineesFormAddEdit,
    roles: ["OrgAdmin", "OrgTrainer","Trainee"],
    isAnonymous: false,
  },
  {
    path: "/trainees",
    name: "Trainees",
    exact: true,
    element: Trainees,
    roles: ["OrgAdmin", "OrgTrainer","Trainee"],
    isAnonymous: false,
  },
];
const employeesRoute = [
  {
    path: "/organization/:id/employees",
    name: "Employees",
    element: Employees,
    roles: ["Admin", "OrgAdmin"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/organization/:id/employees/add",
    name: "EmployeesForm",
    element: EmployeesFormComponent,
    roles: ["Admin", "OrgAdmin"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/organization/:id/employees/invitemember",
    name: "EmployeesForm",
    element: EmployeesFormComponent,
    roles: ["SysAdmin", "OrgAdmin"],
    exact: true,
    isAnonymous: false,
  },
];
const comments = [
  {
    path: "/comments",
    name: "Comments",
    element: Comments,
    roles: ["SysAdmin", "OrgAdmin", "Trainee"],
    exact: true,
    isAnonymous: false,
  },
];

const accessLogs = [
  {
    path: "/accesslogs",
    name: "AccessLogs",
    element: AccessLogs,
    roles: ["SysAdmin"],
    exact: true,
    isAnonymous: false,
  },
];

const organizations = [
  {
    path: "/initial/setup/organization",
    name: "Organizations",
    exact: true,
    element: OrgEnrollForm,
    roles: ["SysAdmin", "OrgAdmin"],
  },
  {
    path: "/organizations",
    name: "Organizations",
    exact: true,
    element: Organizations,
    roles: ["SysAdmin", "OrgAdmin"],
    isAnonymous: false,
  },
];

const blogs = [
  {
    path: "/blogs/add",
    name: "BlogFormAddEdit",
    element: BlogForm,
    roles: ["SysAdmin", "OrgAdmin"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/blogs/edit/:id",
    name: "BlogFormAddEdit",
    element: BlogForm,
    roles: ["SysAdmin", "OrgAdmin"],
    exact: true,
    isAnonymous: false,
  },
];

const zoneRoutes = [
  {
    path: "/zones",
    name: "zones",
    exact: true,
    element: Zones,
    roles: ["SysAdmin", "Trainee", "OrgAdmin", "OrgTrainer", "Customer"],
    isAnonymous: false,
  },
  {
    path: "/zones/add",
    name: "AddEditZones",
    exact: true,
    element: AddEditZones,
    roles: ["SysAdmin", "Trainee", "OrgAdmin", "OrgTrainer"],
    isAnonymous: false,
  },
  {
    path: "/zones/edit/:id",
    name: "EditZone",
    exact: true,
    element: AddEditZones,
    roles: ["SysAdmin", "Trainee", "OrgAdmin", "OrgTrainer"],
    isAnonymous: true,
  },
  {
    path: "/zones/:id/status/:id",
    name: "UpdateStatus",
    exact: true,
    element: AddEditZones,
    roles: ["SysAdmin", "Trainee", "OrgAdmin", "OrgTrainer"],
    isAnonymous: true,
  },
  {
    path: "/zones/7/tictactoe",
    name: "TicTacToe",
    exact: true,
    element: TicTacToe,
    roles: [
      "Trainee",
      "SysAdmin",
      "Customer",
      "OrgAdmin",
      "OrgReports",
      "TrainingUnitAdmin",
      "OrgTrainer",
    ],
    isAnonymous: false,
  },
  {
    path: "/zones/tictactoe/hacked",
    name: "LogoutConsequence",
    exact: true,
    element: LogoutConsequence,
    roles: [
      "Trainee",
      "SysAdmin",
      "Customer",
      "OrgAdmin",
      "OrgReports",
      "TrainingUnitAdmin",
      "OrgTrainer",
    ],
    isAnonymous: false,
  },
];

const test = [
  {
    path: "/test",
    name: "Test",
    exact: true,
    element: AnalyticsDashboards,
    roles: ["Fail"],
    isAnonymous: false,
  },
  {
    path: "/secured",
    name: "A Secured Route",
    exact: true,
    element: AnalyticsDashboards,
    roles: ["Fail"],
    isAnonymous: false,
  },
  {
    path: "/secured2",
    name: "A Secured Route",
    exact: true,
    element: AnalyticsDashboards,
    roles: ["Admin"],
    isAnonymous: false,
  },
];

const errorRoutes = [
  {
    path: "*",
    name: "Error - 404",
    element: PageNotFound,
    roles: [],
    exact: true,
    isAnonymous: false,
  },
];
const trainingUnitRoutes = [
  {
    path: "/trainingUnits/create",
    name: "/trainingUnits/create",
    element: AddTraningUnits,
    roles: ["OrgAdmin", "OrgTrainer"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/trainingUnits/OrgList",
    name: "Organization List",
    element: TrainingUnitsOrgList,
    roles: ["OrgAdmin", "OrgTrainer"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/trainingunit/:id/edit",
    name: "/trainingunit/:id/edit",
    element: AddTraningUnits,
    roles: ["OrgAdmin", "OrgTrainer"],
    exact: true,
    isAnonymous: false,
  },
];

const traineeAccountsComponents = [
  {
    path: "/trainee/accounts",
    name: "TraineeAccounts",
    element: TraineeAccounts,
    roles: ["OrgAdmin", "Super"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/zones/:id/register",
    name: "TraineeAccountsForm",
    exact: true,
    element: TraineeAccountForm,
    roles: ["OrgAdmin", "OrgTrainee", "Trainee", "Super","SysAdmin"],
    isAnonymous: false,
  },
    {
    path: "/zones/register",
    name: "TraineeAccountsForm",
    exact: true,
    element: TraineeAccountForm,
    roles: ["OrgAdmin", "OrgTrainee", "Super","SysAdmin"],
    isAnonymous: false,
  },
  {
    path: "/trainee/account/edit",
    name: "TraineeAccountEdit",
    exact: true,
    element: TraineeAccountEdit,
    roles: ["OrgAdmin", "OrgTrainee", "Trainee", "Super"],
    isAnonymous: false,
  },
   {
    path: "/zones/:id/login",
    name: "TraineeAccountEdit",
    exact: true,
    element: TraineeAccountLogin,
    roles: ["OrgAdmin", "OrgTrainee", "Trainee", "Super"],
    isAnonymous: false,
  },
];

const stripeCheckout = [
  {
    path: "/checkout",
    name: "checkout",
    exact: true,
    element: Checkout,
    roles: ["Customer", "OrgAdmin", "SysAdmin"],
    isAnonymous: false,
  },
  {
    path: "/success",
    name: "BeforeSuccess",
    exact: true,
    element: BeforeSuccess,
    roles: ["Customer", "OrgAdmin", "SysAdmin"],
    isAnonymous: false,
  },
  {
    path: "/invoice",
    name: "CheckoutSuccess",
    exact: true,
    element: CheckoutSuccess,
    roles: ["Customer", "OrgAdmin", "SysAdmin"],
    isAnonymous: false,
  },
];

const zoneConfiguration = [
  {
    path: "/addzoneconfig",
    element: Zone,
    roles: ["OrgAdmin", "OrgTrainer"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/editzoneconfig/:id",
    element: Zone,
    roles: ["OrgAdmin", "OrgTrainer"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/viewthreats",
    element: viewThreats,
    roles: ["OrgAdmin", "OrgTrainer"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "viewthreats/zone/config/table",
    element: ZoneTable,
    roles: ["OrgAdmin", "OrgTrainer"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/zone/config/speed",
    element: SearchBySpeedId,
    roles: ["OrgAdmin", "OrgTrainer"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/zone/config/spread",
    element: SearchBySpreadId,
    roles: ["OrgAdmin", "OrgTrainer"],
    exact: true,
    isAnonymous: false,
  },
];

const blogApproval = [
  {
    path: "/blogsapproval",
    name: "Blogs",
    exact: true,
    element: Blogs,
    roles: ["SysAdmin"],
    isAnonymous: false,
  },
];

const pseudoAds = [
  {
    path: "/pseudoads",
    name: "PseudoAds",
    exact: true,
    element: PseudoAds,
    roles: ["SysAdmin"],
    isAnonymous: false,
  },
];

const zoneGroups = [
  {
    path: "/zonegroups/add",
    name: "AddZoneGroupsForm",
    element: AddZoneGroup,
    roles: ["SysAdmin", "Trainee", "OrgAdmin", "OrgTrainer"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/zone/zonegroupsview",
    name: "ZoneGroupsView",
    element: ZoneGroupsView,
    roles: ["SysAdmin", "Trainee", "OrgAdmin", "OrgTrainer"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/zonegroupview/summary",
    name: "ZoneGroupSummary",
    element: ZoneGroupSummary,
    roles: ["SysAdmin", "Trainee", "OrgAdmin", "OrgTrainer"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/zonegroupview/overview",
    name: "ZoneGroupOverview",
    element: ZoneGroupOverview,
    roles: ["SysAdmin", "Trainee", "OrgAdmin", "OrgTrainer"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/zonegroupview/team",
    name: "ZoneGroupTeam",
    element: ZoneGroupTeam,
    roles: ["SysAdmin", "Trainee", "OrgAdmin", "OrgTrainer"],
    exact: true,
    isAnonymous: false,
  },
];

const userSettings = [
  {
    path: "/usersettings",
    element: UserProfileLayout,
    roles: ["SysAdmin", "Trainee", "OrgAdmin", "OrgTrainer", "Customer"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/usersettings/subscription",
    element: SubscriptionDashboard,
    roles: ["SysAdmin", "Trainee", "OrgAdmin", "OrgTrainer", "Customer"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/usersettings/edit-profile",
    element: UserSettings,
    roles: ["SysAdmin", "Trainee", "OrgAdmin", "OrgTrainer", "Customer"],
    exact: true,
    isAnonymous: false,
  },
];

const addFaqs = [
  {
    path: "/addfaqsform",
    name: "FAQS",
    exact: true,
    element: AddFaqs,
    roles: ["SysAdmin"],
    isAnonymous: false,
  },
];

const locationFormsRoute = [
  {
    path: "/locationform",
    name: "LocationForm",
    element: LocationForms,
    roles: ["SysAdmin", "Trainee", "OrgAdmin", "OrgTrainer"],
    exact: true,
    isAnonymous: false,
  },
  {
    path: "/locationslist",
    name: "LocationsList",
    element: LocationsList,
    roles: ["SysAdmin", "Trainee", "OrgAdmin", "OrgTrainer"],
    exact: true,
    isAnonymous: false,
  },
];

const TrainingScheduleRoutes = [
  {
    path: "/trainingscheduleform",
    name: "trainingScheduleForm",
    element: TrainingSchedule,
    roles: ["SysAdmin", "OrgAdmin"],
    exact: false,
    isAnonymous: false,
  },
  {
    path: "/trainingscheduleform/:id",
    name: "trainingScheduleForm",
    element: TrainingSchedule,
    roles: ["SysAdmin", "OrgAdmin"],
    exact: false,
    isAnonymous: false,
  },
];

const allRoutes = [
  ...avatarAws,
  ...accessLogs,
  ...blogApproval,
  ...pseudoAds,
  ...actors,
  ...blogs,
  ...consequenceRoutes,
  ...cronjobs,
  ...dashboardRoutes,
  ...test,
  ...errorRoutes,
  ...organizations,
  ...traineeAccountsComponents,
  ...zoneConfiguration,
  ...zoneGroups,
  ...zoneRoutes,
  ...trainingUnitRoutes,
  ...trainees,
  ...employeesRoute,
  ...instructors,
  ...TrainingScheduleRoutes,
  ...rescueCenter,
  ...actorAccounts,
  ...comments,
  ...userSettings,
  ...locationFormsRoute,
  ...stripeCheckout,
  ...addFaqs,
  ...eventRoutes,
  ...reportRoutes,
  ...actorWizard,
  ...traineeRoutes,
];
export default allRoutes;
