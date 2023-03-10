USE [Immersed]
GO
/****** Object:  StoredProcedure [dbo].[Avatar_Select_Paged]    Script Date: 1/3/2023 12:36:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

 --=============================================
 --Author: <Cho, Jerry>
 --Create date: <2022-12-7>
 --Description: <Select by Id for Actor Accounts>
 --Code Reviewer:
 

 --MODIFIED BY: <Author>
 --MODIFIED DATE: <2022-11-16>
 --Code Reviewer: 
 --Note: 
 --=============================================

ALTER proc [dbo].[Avatar_Select_Paged]
			 @PageIndex int
			,@PageSize int
			,@Query nvarchar(256)


as
/*
Declare		@PageIndex int = 0
			,@PageSize int = 10
			,@Query nvarchar(256) = 'Damian'

Execute [dbo].Avatar_Select_Paged
			@PageIndex
			,@PageSize
			,@Query

*/

BEGIN

Declare @offset int = @PageIndex * @PageSize

SELECT 
			a.[Id]
		   ,f.[Id] as FileId
		   ,f.[Name]
		   ,f.[Url]
		   ,a.[IsDeleted]
		   ,a.[CreatedBy]
		   ,u.[Email]
		   ,u.[FirstName]
		   ,u.[LastName]
		   ,a.[DateCreated]
	  ,TotalCount = COUNT(1) OVER()

FROM dbo.Avatars as a inner join dbo.Files as f
					  on a.FileId = f.Id
					  inner join dbo.Users as u
					  on a.CreatedBy =u.Id

	WHERE (f.[Name] LIKE '%' + @Query + '%' OR
			u.[Email] LIKE '%' + @Query + '%' OR
			u.[FirstName] LIKE '%' + @Query + '%' OR
			u.[LastName] LIKE '%' +@Query + '%')
	ORDER BY a.Id
	OFFSET @offSet Rows
	Fetch Next @PageSize Rows ONLY

END