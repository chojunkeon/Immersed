USE [Immersed]
GO
/****** Object:  StoredProcedure [dbo].[ActorAccounts_Update_Status]    Script Date: 1/3/2023 12:35:45 PM ******/
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

ALTER proc [dbo].[ActorAccounts_Update_Status]
			@AccountStatusId int
			,@ModifiedBy int
			,@Id int 

/*-----------------------TestCode--------------------

Declare @Id int = 2;
Declare @AccountStatusId int = 4
		,@ModifiedBy int = 20
		

Execute dbo.ActorAccounts_Update_Status
		 @AccountStatusId
		,@ModifiedBy 
		,@Id

*/

AS

BEGIN 

	Declare @DateNow datetime2(7) = getutcdate()

	UPDATE dbo.ActorAccounts 
		SET
			[AccountStatusId]= @AccountStatusId
			,[ModifiedBy] = @ModifiedBy
			,[DateModified] = @DateNow

	Where Id = @Id

END