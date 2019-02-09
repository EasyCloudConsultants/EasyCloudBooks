


$('.main-menu li').removeClass('active');
if (location.href.indexOf('help/ServiceScheduler') !== -1) {
    $('.main-menu li').find('a[href="ServiceScheduler"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/Services') !== -1) {
    $('.main-menu li').find('a[href="Services"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/Setup') !== -1) {
    $('.main-menu li').find('a[href="Setup"]').parent().addClass('action');
}
else if (location.href.indexOf('User/Contact') !== -1) {
    $('.main-menu li').find('a[href="Contact"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/ClientLogin') !== -1) {
    $('.main-menu li').find('a[href="ClientLogin"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/Company') !== -1) {
    $('.main-menu li').find('a[href="Company"]').parent().addClass('action');
}
else if (location.href.indexOf('User/Template') !== -1) {
    $('.main-menu li').find('a[href="Template"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/Dashboard-Home') !== -1) {
    $('.main-menu li').find('a[href="Dashboard-Home"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/PersonalGadgets') !== -1) {
    $('.main-menu li').find('a[href="PersonalGadgets"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/Staff') !== -1) {
    $('.main-menu li').find('a[href="Staff"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/Role') !== -1) {
    $('.main-menu li').find('a[href="Role"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/Settings') !== -1) {
    $('.main-menu li').find('a[href="Settings"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/ManageYear') !== -1) {
    $('.main-menu li').find('a[href="ManageYear"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/Package') !== -1) {
    $('.main-menu li').find('a[href="Package"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/ActivePackage') !== -1) {
    $('.main-menu li').find('a[href="ActivePackages"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/TeamViewer') !== -1) {
    $('.main-menu li').find('a[href="TeamViewer"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/Team') !== -1) {
    $('.main-menu li').find('a[href="Team"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/ReviewProjects') !== -1) {
    $('.main-menu li').find('a[href="ReviewProjects"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/FinishedProjects') !== -1) {
    $('.main-menu li').find('a[href="FinishedProjects"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/AccountStatementTax') !== -1) {
    $('.main-menu li').find('a[href="AccountStatementTax"]').parents('li').addClass('action');
}
//else if (location.href.toLocaleLowerCase().indexOf('help/accountstatement') != -1) {
//    $('.main-menu li').find('a[href="accountstatement"]').parents('li').addClass('active');
//}
else if (location.href.indexOf('User/Accounts') !== -1) {
    $('.main-menu li').find('a[href="Accounts"]').parents('li').addClass('action');
}

else if (location.href.indexOf('User/ProjectImport') !== -1) {
    $('.main-menu li').find('a[href="ProjectImport"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/Projects') !== -1) {
    $('.main-menu li').find('a[href="Projects"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/PaymentLog') !== -1) {
    $('.main-menu li').find('a[href="PaymentLog"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/TimeSheet') !== -1) {
    $('.main-menu li').find('a[href="TimeSheet"]').parent().addClass('action');
}
else if (location.href.search('User/DocumentLog') !== -1) {
    $('.main-menu li').find('a[href="DocumentLog"]').parents('li').addClass('action');
}
else if (location.href.search('User/Document') !== -1) {
    $('.main-menu li').find('a[href="Document"]').parents('li').addClass('action');
}
else if (location.href.search('User/Export') !== -1) {
    $('.main-menu li').find('a[href="Export"]').parents('li').addClass('action');
}

else if (location.href.indexOf('User/InoutDocument') !== -1) {
    $('.main-menu li').find('a[href="InoutDocuments"]').parent().addClass('action');

}
else if (location.href.indexOf('User/Scheduler') !== -1) {
    $('.main-menu li').find('a[href="Scheduler"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/Customfield') !== -1) {
    $('.main-menu li').find('a[href="Customfield"]').parents('li').addClass('action');
}

else if (location.href.indexOf('User/Querybuilder') !== -1) {
    $('.main-menu li').find('a[href="Querybuilder"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/Query') !== -1) {
    $('.main-menu li').find('a[href="Query"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/notify/NotifyDashboard') !== -1) {
    $('.main-menu li').find('a[href="notify/NotifyDashboard"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/notify/EmailLog') !== -1) {
    $('.main-menu li').find('a[href="notify/EmailLog"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/notify/SmsLog') !== -1) {
    $('.main-menu li').find('a[href="notify/SmsLog"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/notify/EmailTemplate') !== -1) {
    $('.main-menu li').find('a[href="notify/EmailTemplate"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/notify/CreateNotification') !==-1) {
    $('.main-menu li').find('a[href="notify/CreateNotification"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/notify/Automation') !== -1) {
    $('.main-menu li').find('a[href="notify/Automation"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/Notifications') !== -1) {
    $('.main-menu li').find('a[href="Notifications"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/UserProfile') !== -1) {
    $('.main-menu li').find('a[href="UserProfile"]').parents('li').addClass('action');

}
else if (location.href.indexOf('User/GlobalSearch') !== -1) {
    $('.main-menu li').find('a[href="GlobalSearch"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/ChangeLog') !== -1) {
    $('.main-menu li').find('a[href="ChangeLog"]').parents('li').addClass('action');
}
else if (location.href.indexOf('User/SampleExcelFiles') !== -1) {
    $('.main-menu li').find('a[href="SampleExcelFiles"]').parents('li').addClass('action');
}