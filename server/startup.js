Meteor.startup(function () {
    ServiceConfiguration.configurations.upsert(
        { service: "github" },
        {
            $set: {
                clientId: "d8bbf1768e634457bf6a",
                secret: "6541237ff251853f105f6bf38fdb506c377a2746"
            }
        }
    );
});
