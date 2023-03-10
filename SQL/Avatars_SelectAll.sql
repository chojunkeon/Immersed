USE [Immersed]
GO
/****** Object:  StoredProcedure [dbo].[Avatars_SelectAll]    Script Date: 1/3/2023 12:36:24 PM ******/
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

ALTER proc [dbo].[Avatars_SelectAll]

as
/*

	Execute dbo.Avatars_SelectAll

*/

Begin

	Select 
			a.[Id]
		   ,f.[Id] as FileId
		   ,f.[Name]
		   ,f.[Url]
		   ,a.[IsDeleted]
		   ,u.[Id] as CreatedBy
		   ,u.[Email]
		   ,u.[FirstName]
		   ,u.[LastName]
		   ,a.[DateCreated]
	
	From	dbo.Avatars as a inner join dbo.Files as f
			on a.FileId =f.Id
			inner join dbo.Users as u
			on a.CreatedBy = u.Id

	Where	a.[IsDeleted] = 0;

End