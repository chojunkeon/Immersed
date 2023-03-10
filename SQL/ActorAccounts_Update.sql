USE [Immersed]
GO
/****** Object:  StoredProcedure [dbo].[ActorAccounts_Update]    Script Date: 1/3/2023 12:35:36 PM ******/
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

ALTER proc [dbo].[ActorAccounts_Update]
			@UserName nvarchar(100)
			,@Password nvarchar(50)
			,@AvatarUrl nvarchar(255)
			,@ZoneId int
			,@ActorId int
			,@AccountStatusId int
			,@ModifiedBy int
			,@Id int

AS

/*
		Declare @Id int = 2;
		Declare		
					@UserName nvarchar(100) ='TestUpdateCode'
					,@Password nvarchar(50) = 'TestUpdate123'
					,@AvatarUrl nvarchar(255) = 'TestUpdate'
					,@ZoneId int= 1
					,@ActorId int=1
					,@AccountStatusId int=1
					,@ModifiedBy int=17
					

		Execute dbo.ActorAccounts_Update
					@UserName
					,@Password
					,@AvatarUrl
					,@ZoneId
					,@ActorId
					,@AccountStatusId
					,@ModifiedBy
					,@Id
*/

BEGIN
	Declare @DateNow datetime2(7) = getutcdate()

	UPDATE dbo.ActorAccounts
	SET	
		[UserName]= @UserName
	   ,[Password]=@Password
	   ,[AvatarUrl]=@AvatarUrl
	   ,[ZoneId]=@ZoneId
	   ,[ActorId]=@ActorId
	   ,[AccountStatusId]=@AccountStatusId
	   ,[ModifiedBy]=@ModifiedBy
	   ,[DateModified]=@DateNow

	Where Id = @Id

END