USE [Immersed]
GO
/****** Object:  StoredProcedure [dbo].[Avatars_Update_IsDeleted_ById]    Script Date: 1/3/2023 12:36:52 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

 --=============================================
 --Author: <Cho, Jerry>
 --Create date: <2022-12-7>
 --Description: <Avatar BackEND>
 --Code Reviewer:
 

 --MODIFIED BY: <Author>
 --MODIFIED DATE: 
 --Code Reviewer: 
 --Note: 
 --=============================================

ALTER proc [dbo].[Avatars_Update_IsDeleted_ById]
		@Id int
		,@IsDeleted bit
as

/*

	Declare @Id int =1
			,@IsDeleted bit=1;
	Execute dbo.Avatars_Update_IsDeleted_ById @Id
											,@IsDeleted
*/

Begin

	Update dbo.Avatars
		Set 
			[IsDeleted] =@IsDeleted
		Where Id = @Id

End