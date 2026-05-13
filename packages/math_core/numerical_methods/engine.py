import numpy as np
from scipy import linalg
from scipy.sparse import csr_matrix
from scipy.sparse.linalg import cg

class NumericalMathEngine:
    """
    High-Performance Numerical Computation Engine.
    Handles Linear Algebra, Sparse Solvers, and Tensor Operations.
    """
    def solve_linear_system(self, A, b, method="direct"):
        """
        Solves Ax = b.
        Critical for FEM, CFD, and Control Systems.
        """
        if method == "direct":
            # LU Decomposition for dense systems
            return linalg.solve(A, b)
        elif method == "iterative":
            # Conjugate Gradient for large sparse systems (Level 4)
            x, info = cg(A, b)
            return x

    def compute_eigenvalues(self, A):
        """
        Modal Analysis foundation.
        """
        return linalg.eigvals(A)

    def tensor_decomposition(self, tensor):
        """
        SVD for optimization and dimensionality reduction.
        """
        U, s, Vh = linalg.svd(tensor)
        return U, s, Vh

    def create_sparse_stiffness_matrix(self, data, indices, indptr, shape):
        """
        Efficient representation for large-scale FEM (Level 4).
        """
        return csr_matrix((data, indices, indptr), shape=shape)

    def validate_stability(self, A):
        """
        Checks system stability (Level 7) using eigenvalues.
        """
        eigenvals = self.compute_eigenvalues(A)
        return np.all(np.real(eigenvals) < 0)
