USE [Immersed]
GO
/****** Object:  StoredProcedure [dbo].[ActorAccounts_Select_ByZoneId]    Script Date: 1/3/2023 12:35:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

 --=============================================
 --Author: <Cho, Jerry>
 --Create date: <2022-11-16>
 --Description: <Select by Id for Actor Accounts>
 --Code Reviewer:<Arenas, Jay>
 

 --MODIFIED BY: <Author>
 --MODIFIED DATE: <2022-11-16>
 --Code Reviewer: 
 --Note: 
 --=============================================
ALTER proc [dbo].[ActorAccounts_Select_ByZoneId]
			@ZoneId int
		

AS

/*
Declare @ZoneId int =1;
Execute dbo.ActorAccounts_Select_ByZoneId @ZoneId

*/
Begin

	Select 
		a.[Id]
	   ,a.[UserName]
	   ,a.[Password]
	   ,a.[AvatarUrl]
	   ,z.[Id]
	   ,z.[Name]
	   ,zs.[Id]
	   ,zs.[Name]
	   ,a1.[Id] as ActorId
	   ,a1.[Name] as ActorName
	   ,act.[Id] as ActorTypeId
	   ,act.[Name] ActorTypeName
	   ,st.[Id] as StatusTypeId
	   ,st.[Name] StatusTypeName
	   ,s.[Id] as AccountStatusId
	   ,s.[Name] as AccountStatusName
	   ,a.[CreatedBy]
	   ,u.[FirstName]
	   ,u.[LastName]
	   ,a.[ModifiedBy]
	   ,u1.[FirstName]
	   ,u1.[LastName]
	   ,a.[DateCreated]
	   ,a.[DateModified]
	 
	From dbo.ActorAccounts as a inner join dbo.Zones as z
		on a.ZoneId = z.Id	
		inner join dbo.ZoneStatus as zs
		on z.ZoneStatusId = zs.Id
		inner join dbo.Actors as a1
		on a.ActorId = a1.Id
		inner join dbo.ActorTypes as act
		on a1.ActorTypeId = act.Id
		inner join dbo.StatusTypes as st
		on a1.StatusTypeId = st.Id
		inner join dbo.AccountStatus as s
		on a.AccountStatusId = s.Id
		inner join dbo.Users as u
		on a.CreatedBy= u.Id
		inner join dbo.Users as u1
		on a.ModifiedBy = u1.Id

	Where z.Id = @ZoneId

END